import { createContext, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../styles/theme/default";

interface ThemeToggleContextType {
  toggleTheme: () => void;
  theme: typeof darkTheme | typeof lightTheme;
}
interface ThemeToggleProviderProps {
  children: React.ReactNode;
}

export const ThemeTogleContext = createContext({} as ThemeToggleContextType);

export function ThemeToggleProvider({ children }: ThemeToggleProviderProps) {
  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    const storedTheme = localStorage.getItem("@ignite-timer:theme-1.0.0");
    if (storedTheme) {
      setTheme(storedTheme === "dark" ? darkTheme : lightTheme);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.title === "dark" ? lightTheme : darkTheme
    );
    localStorage.setItem(
      "@ignite-timer:theme-1.0.0",
      theme.title === "dark" ? "light" : "dark"
    );
  };

  return (
    <ThemeTogleContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeTogleContext.Provider>
  );
}
