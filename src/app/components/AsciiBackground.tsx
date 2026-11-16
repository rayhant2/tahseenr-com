import { ASCII_GATE } from "./asciiGateData";

export default function AsciiBackground() {
  return (
    <div
      className="ascii-background is-loaded"
      aria-hidden="true"
      data-nosnippet
    >
      <pre className="ascii-background__text">{ASCII_GATE}</pre>
    </div>
  );
}
