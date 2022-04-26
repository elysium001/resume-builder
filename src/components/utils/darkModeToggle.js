import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="flex justify-end py-3">
      <div className="form-check form-switch">
        <input
          className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
          type="checkbox"
          role="switch"
          checked={isDark}
          onChange={(val) => {
            if (isDark) {
              localStorage.theme = "light";
              setDark(false);
            } else {
              localStorage.theme = "dark";
              setDark(true);
            }
          }}
          id="flexSwitchCheckDefault"
        />
        <label
          className="form-check-label inline-block text-gray-800 dark:text-white ml-2"
          htmlFor="flexSwitchCheckDefault"
        >
          Dark Mode
        </label>
      </div>
    </div>
  );
}
