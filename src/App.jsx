import { useEffect, useState } from 'react'
import './App.css'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  const HorizontalLine = <div className="py-20 md:px-36 px-9 text-black dark:bg-[#131013]">
    <hr className="dark:text-white dark:border-white border-black text-black" />
  </div>

  const [theme, setTheme] = useState(localStorage.theme || 'light');


  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.theme = newTheme;
  };

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);


  return (
    <>

      <Home toggleTheme={toggleTheme} theme={theme} />
      {HorizontalLine}
      <Skills />
      {HorizontalLine}
      <Projects />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
