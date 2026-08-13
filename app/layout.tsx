import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Third Eye Music",
  description: "Music, recorded and produced with intention.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
