import Hero from "./component/Hero"
import Highlights from "./component/Highlights"
import Model from "./component/Model"
import Navbar from "./component/Navbar"
import Features from "./component/Features"
import HowitWorks from "./component/HowitWorks"
import Footer from "./component/Footer"

const App = () => {
 

  return (
    <main className="bg-white">
      <Navbar />
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
      <HowitWorks/>
      <Footer/>
    </main>
  )
}

export default App
