"use client";

import { Listbox } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const themes = [
  {
    id: "system",
    label: "System",
  },
  {
    id: "light",
    label: "Light",
  },
  {
    id: "dark",
    label: "Dark",
  },
] as const;

function ThemeSelector() {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <Listbox value={theme} onChange={(value) => setTheme(value)}>
      {mounted && resolvedTheme ? (
        <Listbox.Button>{theme}</Listbox.Button>
      ) : (
        <div>Empty</div>
      )}

      <Listbox.Options>
        {themes.map((theme) => (
          <Listbox.Option key={theme.id} value={theme.id}>
            {theme.label}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}

export default ThemeSelector;
