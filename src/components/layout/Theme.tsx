import { useEffect, useState } from "preact/hooks";
import { DarkSh, MoonSht } from "@components/layout/DarkIcons";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button onClick={handleClick} className=" mx-4" aria-label="Modo oscuro">
      {theme === "light" ? <MoonSht /> : <DarkSh />}
    </button>
  );
}
