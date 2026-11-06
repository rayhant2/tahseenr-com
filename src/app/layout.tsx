import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tahseen Rayhan",
};

const themeScript = `
  (() => {
    try {
      const stored = localStorage.getItem("tahseenr-theme");
      const theme = stored === "light" || stored === "dark"
        ? stored
        : "light";
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
