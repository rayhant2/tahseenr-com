import Image from "next/image";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import AsciiGrass from "./components/AsciiGrass";

const socialStubs = [
  { label: "Email", icon: FiMail },
  { label: "LinkedIn", icon: FaLinkedinIn },
  { label: "GitHub", icon: FaGithub },
  { label: "X", icon: FaXTwitter },
];

export default function Home() {
  return (
    <main className="site-canvas">
      <div className="ascii-background" aria-hidden="true">
        <Image
          src="/ascii-background.png"
          alt=""
          fill
          priority
          sizes="(orientation: portrait) 155vh, 100vw"
          unoptimized
        />
      </div>

      <div className="site-content">
        <header className="intro">
          <h1>Tahseen Rayhan</h1>
          <p>CS @ UWaterloo, BBA @ Laurier</p>
        </header>

        <section className="experience" aria-labelledby="experience-title">
          <h2 id="experience-title">Experience</h2>
          <ul>
            <li>
              <span aria-hidden="true">↳</span>
              <a href="https://cohere.com">Cohere</a>
            </li>
            <li>
              <span aria-hidden="true">↳</span>
              <a href="https://labscommunity.cohere.com/blog/2026/tiny-aya-vision/">
                Tiny Aya Vision
              </a>
            </li>
          </ul>
        </section>

        <nav className="social-stubs" aria-label="Social links coming soon">
          {socialStubs.map(({ label, icon: Icon }) => (
            <span
              className="social-stub"
              key={label}
              aria-label={`${label} link coming soon`}
              title={`${label} link coming soon`}
            >
              <Icon aria-hidden="true" />
            </span>
          ))}
        </nav>
      </div>

      <AsciiGrass />
    </main>
  );
}
