import { createContext } from "react";

// eslint-disable-line @typescript-eslint/no-unused-vars
export const ThemeContext = createContext({
  theme: "",
  setTheme: (theme) => {
    console.log(theme);
  },
});
