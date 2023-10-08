import './App.css'
import AboutUs from './components/navbar/AboutUs'
import ContactUs from './components/navbar/ContactUs'
import Footer from './components/navbar/Footer'
import Jumbotron from './components/navbar/Jumbotron'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Jumbotron />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
