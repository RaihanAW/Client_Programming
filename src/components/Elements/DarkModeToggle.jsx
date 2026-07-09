import React, { useContext } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { DarkModeContext } from "../../context/darkModeContext";

function DarkModeToggle({ className = "" }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
      className={`cursor-pointer rounded-full p-2 hover:scale-110 transition-transform
        text-gray-01 dark:text-gray-200 hover:text-primary ${className}`}
    >
      {darkMode ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
    </button>
  );
}

export default DarkModeToggle;
