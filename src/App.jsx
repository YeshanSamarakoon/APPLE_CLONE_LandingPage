import Hero from "./component/Hero"
import Highlights from "./component/Highlights"
import Model from "./component/Model"
import Navbar from "./component/Navbar"
import Features from "./component/Features"

const App = () => {
 

  return (
    <main className="bg-black">
      <Navbar />
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
    </main>
  )
}

export default App
