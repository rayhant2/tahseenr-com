import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tahseen Rayhan",
  description:
    "Tahseen Rayhan — CS at the University of Waterloo and BBA at Wilfrid Laurier University, with experience at Cohere and Tiny Aya Vision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
