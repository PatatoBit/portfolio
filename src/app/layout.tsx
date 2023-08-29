import Navbar from "@/components/Navbar";
import "./globals.scss";
import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai_Looped } from "next/font/google";
import { Providers } from "./providers";

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
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children as JSX.Element}
        </Providers>
      </body>
    </html>
  );
}
