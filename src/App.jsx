import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './App.css'


function App() {

  return (
    <>
    <div className="bg-black text-white min-h-screen">
      <nav>
          <Navbar/>
      </nav>
      <main>
        <Hero/>
        <About/>
        <Services/>
        <Contact/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>

    </>
  )
}

export default App
