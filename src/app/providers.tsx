"use client";

import { ThemeProvider } from "next-themes";

export function Providers({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
