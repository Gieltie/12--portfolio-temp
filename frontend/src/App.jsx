import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext } from './contexts/theme-context';
import { useState } from "react";
import { HomePage, Project, Error } from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToHashElement from "./contexts/ScrollToHashEllement";

export default function App() {

  const isBrowserDefaulDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const getDefaultTheme = () => {
    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaulDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
  };
  
  const [theme, setTheme] = useState(getDefaultTheme());

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>
        <div className='home'>
          <BrowserRouter>
          <ScrollToHashElement />
            <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/project/:id" element={<Project />} />
                <Route path="/*" element={<Error />} />
              </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}