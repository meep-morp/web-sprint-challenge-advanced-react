import react, { useState } from "react";

export const useDarkMode = (initialState) => {
  const [darkModeState, setDarkModeState] = useState("darkMode", initialState);

  const toggleMode = e => {
    setDarkModeState(!darkModeState);
  };

  return [darkModeState, setDarkModeState, toggleMode]
}