
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grovjoint India | Ductile Iron Grooved Pipe Fittings",
  description:
    "Grovjoint India manufactures and supplies ductile iron grooved fittings, couplings and flanges for infrastructure and piping systems.",

  icons: {
    icon: "/images/grovjoint-logo.png",
    shortcut: "/images/grovjoint-logo.png",
    apple: "/images/grovjoint-logo.png",
  },
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
