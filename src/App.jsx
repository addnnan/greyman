
import Contracting from './pages/contracting'
import { Route, Switch } from 'wouter'
import Home from './pages/Home'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import BusinessConsultancy from './pages/BusinessConsultancy'
import ProServices from './pages/ProServices'
import FinancialServices from './pages/FinancialService'
import DocumentClearance from './pages/DocumentClearance'
import VisaServices from './pages/VisaServices'
import TravelTourism from './pages/TravelTourism'
import HRConsultancy from './pages/HRconsultancy'
import ScrollToTop from './components/ScrollToTop'
import { AnimatePresence } from 'framer-motion'

import './App.css'


function App() {

  return (
    <>
    <div className="bg-black text-white min-h-screen">
    
    <Navbar/>
    <ScrollToTop/>
      <AnimatePresence mode='wait'>
    <Switch>
    <Route path="/" component={Home} />
     <Route path="/contracting" component={Contracting} />
      <Route path="/consultancy" component={BusinessConsultancy} />
      <Route path="/pro-services" component={ProServices} />
      <Route path="/financial-services" component={FinancialServices} />
      <Route path="/document-clearance" component={DocumentClearance} />
      <Route path="/visa-services" component={VisaServices} />
      <Route path="/travel-tourism" component={TravelTourism} />
      <Route path="/hr-consultancy" component={HRConsultancy} />
    </Switch>
    </AnimatePresence>

    
    <Footer/>
                  
    </div>
   
    </>
  )
}

export default App
