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


  return (
    <>
      <Home />
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
