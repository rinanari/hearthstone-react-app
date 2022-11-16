import React, { useState, createContext, PropsWithChildren } from "react";

type Theme = "Light" | "Dark";

interface Context {
  theme: Theme;
  toggleTheme: () => void;
}
interface Props {
  children: React.ReactNode;
}

export const ThemeContext = createContext<Context>({
  theme: "Light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>("Light");

  function toggleTheme() {
    setTheme(theme === "Light" ? "Dark" : "Light");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
