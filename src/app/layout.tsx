import "./globals.scss";
import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai_Looped } from "next/font/google";

const inter = IBM_Plex_Sans_Thai_Looped({
  weight: ["400", "700"],
  subsets: ["latin", "thai"],
});

export const metadata: Metadata = {
  title: "Patfolio",
  description: "Pat is a developer, gamer, artist and a student from Thailand.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
