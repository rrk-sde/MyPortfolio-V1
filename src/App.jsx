import './App.css'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {


  return (
    <>
      <Home />
      <div className="py-20 md:px-36 px-9 dark:bg-[#131013]">
        <hr className="dark:text-white" />
      </div>
      <Skills />
      <div className="py-20 md:px-36 px-9 dark:bg-[#131013]">
        <hr className="dark:text-white" />
      </div>
      <Projects />
      <div className="py-20 md:px-36 px-9 dark:bg-[#131013]">
        <hr className="dark:text-white" />
      </div>
      <ContactUs />
      <div className="py-6 md:px-36 px-9 dark:bg-[#242424]">
        <hr className="dark:text-white" />
      </div>
      <Footer />
    </>
  )
}

export default App
