import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import AsciiBackground from "./components/AsciiBackground";
import AsciiGrass from "./components/AsciiGrass";
import AsciiLamps from "./components/AsciiLamps";

const socialLinks = [
  { label: "Email", href: "mailto:seen.rayhan@gmail.com", icon: FiMail },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tahseenr/",
    icon: FaLinkedinIn,
  },
  { label: "GitHub", href: "https://github.com/rayhant2", icon: FaGithub },
  { label: "X", href: "https://x.com/tahseenr0", icon: FaXTwitter },
];

export default function Home() {
  return (
    <main className="site-canvas">
      <AsciiBackground />

      <AsciiLamps />

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
              <a
                href="https://cohere.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cohere
              </a>
            </li>
            <li>
              <span aria-hidden="true">↳</span>
              <a
                href="https://labscommunity.cohere.com/blog/2026/tiny-aya-vision/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tiny Aya Vision
              </a>
            </li>
          </ul>
        </section>

        <nav className="social-stubs" aria-label="Social links">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              className="social-stub"
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
            >
              <Icon aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>

      <AsciiGrass />
    </main>
  );
}
