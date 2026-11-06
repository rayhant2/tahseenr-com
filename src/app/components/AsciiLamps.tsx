const lampSides = ["left", "right"] as const;

export default function AsciiLamps() {
  return (
    <div className="ascii-lamps" aria-hidden="true">
      {lampSides.map((side) => (
        <div className={`ascii-lamp ascii-lamp--${side}`} key={side}>
          <div className="ascii-lamp__layer ascii-lamp__mount" />
          <div className="ascii-lamp__layer ascii-lamp__swing" />
        </div>
      ))}
    </div>
  );
}
