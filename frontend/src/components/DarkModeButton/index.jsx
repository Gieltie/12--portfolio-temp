import { LuSun, LuMoon } from "react-icons/lu";
import { ThemeContext } from "../../contexts/theme-context";
import { useContext } from "react";

import './index.scss'

export default function DarkModeButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
  }

  return (
    <div  className="dark-mode-btn">
      <input type="checkbox" className="checkbox" id="checkbox"  onChange={handleThemeChange} /* checked={theme === 'light'} *//>
      <label htmlFor="checkbox" className="checkbox__label">
        <LuMoon className="checkbox__label--moon"/>
        <LuSun className="checkbox__label--sun"/>
        <span className="checkbox__label--ball"></span>
      </label>
    </div>
  )
}