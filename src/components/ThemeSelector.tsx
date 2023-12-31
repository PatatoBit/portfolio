"use client";

import { Listbox } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import styles from "./components.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSun } from "@fortawesome/free-regular-svg-icons";

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
    <div className={styles.themeContainer}>
      <Listbox value={theme} onChange={(value) => setTheme(value)}>
        {mounted && resolvedTheme ? (
          <Listbox.Button className={styles.themeButton}>
            <FontAwesomeIcon icon={faSun} />
          </Listbox.Button>
        ) : (
          <div>Empty</div>
        )}

        <Listbox.Options className={styles.themeList}>
          {themes.map((theme) => (
            <Listbox.Option key={theme.id} value={theme.id}>
              {theme.label}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}

export default ThemeSelector;
