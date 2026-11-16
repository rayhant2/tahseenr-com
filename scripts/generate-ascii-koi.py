#!/usr/bin/env python3

from __future__ import annotations

import json
import math
import sys
from collections import deque
from pathlib import Path

from PIL import Image, ImageFilter


PALETTE = {
    "ink": (17, 35, 50),
    "navy": (29, 67, 96),
    "blue": (91, 149, 177),
    "pale": (181, 213, 220),
    "coral": (229, 83, 72),
    "salmon": (244, 145, 127),
}

GLYPHS = {
    "ink": "@@##",
    "navy": "##%%",
    "blue": "%%&&",
    "pale": "++==",
    "coral": "##&&",
    "salmon": "**++",
}


def color_distance(left: tuple[int, int, int], right: tuple[int, int, int]) -> float:
    return math.sqrt(sum((a - b) ** 2 for a, b in zip(left, right)))


def largest_component(image: Image.Image) -> tuple[Image.Image, tuple[int, int, int, int]]:
    rgb = image.convert("RGB")
    width, height = rgb.size
    corners = [
        rgb.getpixel((4, 4)),
        rgb.getpixel((width - 5, 4)),
        rgb.getpixel((4, height - 5)),
        rgb.getpixel((width - 5, height - 5)),
    ]
    background = tuple(sum(color[index] for color in corners) // 4 for index in range(3))
    pixels = rgb.load()
    foreground = bytearray(width * height)

    for y in range(height):
        for x in range(width):
            if color_distance(pixels[x, y], background) > 44:
                foreground[y * width + x] = 1

    seen = bytearray(width * height)
    largest: list[tuple[int, int]] = []

    for y in range(height):
        for x in range(width):
            index = y * width + x
            if not foreground[index] or seen[index]:
                continue

            queue = deque([(x, y)])
            seen[index] = 1
            component: list[tuple[int, int]] = []
            touches_edge = False

            while queue:
                current_x, current_y = queue.popleft()
                component.append((current_x, current_y))
                if (
                    current_x <= 2
                    or current_y <= 2
                    or current_x >= width - 3
                    or current_y >= height - 3
                ):
                    touches_edge = True

                for offset_y in (-1, 0, 1):
                    for offset_x in (-1, 0, 1):
                        if offset_x == 0 and offset_y == 0:
                            continue
                        next_x = current_x + offset_x
                        next_y = current_y + offset_y
                        if not (0 <= next_x < width and 0 <= next_y < height):
                            continue
                        next_index = next_y * width + next_x
                        if foreground[next_index] and not seen[next_index]:
                            seen[next_index] = 1
                            queue.append((next_x, next_y))

            if not touches_edge and len(component) > len(largest):
                largest = component

    mask = Image.new("L", rgb.size)
    mask_pixels = mask.load()
    for x, y in largest:
        mask_pixels[x, y] = 255

    mask = mask.filter(ImageFilter.MaxFilter(3)).filter(ImageFilter.MinFilter(3))
    bounds = mask.getbbox()
    if bounds is None:
        raise RuntimeError("No koi silhouette found")

    left, top, right, bottom = bounds
    padding = 3
    return mask, (
        max(0, left - padding),
        max(0, top - padding),
        min(width, right + padding),
        min(height, bottom + padding),
    )


def closest_tone(color: tuple[int, int, int]) -> str:
    return min(PALETTE, key=lambda tone: color_distance(color, PALETTE[tone]))


def convert(path: Path, rows: int = 68) -> list[list[list[str]]]:
    source = Image.open(path).convert("RGB")
    mask, bounds = largest_component(source)
    source = source.crop(bounds)
    mask = mask.crop(bounds)
    aspect_ratio = source.width / source.height
    columns = max(30, round(rows * aspect_ratio / 0.58))
    target_size = (columns, rows)
    sampled_source = source.resize(target_size, Image.Resampling.BOX)
    sampled_mask = mask.resize(target_size, Image.Resampling.BOX)
    rows_data: list[list[list[str]]] = []

    for y in range(rows):
        cells: list[tuple[str, str]] = []
        for x in range(columns):
            coverage = sampled_mask.getpixel((x, y)) / 255
            if coverage < 0.2:
                cells.append(("space", " "))
                continue

            tone = closest_tone(sampled_source.getpixel((x, y)))
            glyphs = GLYPHS[tone]
            glyph = glyphs[(x * 3 + y * 5 + (x // 2) * (y // 3)) % len(glyphs)]
            cells.append((tone, glyph))

        while cells and cells[-1][0] == "space":
            cells.pop()

        runs: list[list[str]] = []
        for tone, glyph in cells:
            if runs and runs[-1][0] == tone:
                runs[-1][1] += glyph
            else:
                runs.append([tone, glyph])
        rows_data.append(runs)

    while rows_data and not rows_data[0]:
        rows_data.pop(0)
    while rows_data and not rows_data[-1]:
        rows_data.pop()
    return rows_data


def main() -> None:
    if len(sys.argv) != 4:
        raise SystemExit("usage: generate-ascii-koi.py IMAGE_ONE IMAGE_TWO OUTPUT")

    first = convert(Path(sys.argv[1]))
    second = convert(Path(sys.argv[2]))
    output = Path(sys.argv[3])
    output.write_text(
        "export type KoiTone = \"space\" | \"ink\" | \"navy\" | \"blue\" | \"pale\" | \"coral\" | \"salmon\";\n"
        "export type KoiRow = Array<[KoiTone, string]>;\n\n"
        f"export const KOI_ONE: KoiRow[] = {json.dumps(first, separators=(',', ':'))};\n\n"
        f"export const KOI_TWO: KoiRow[] = {json.dumps(second, separators=(',', ':'))};\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
