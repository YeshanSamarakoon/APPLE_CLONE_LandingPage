import Hero from "./component/Hero"
import Highlights from "./component/Highlights"
import Model from "./component/Model"
import Navbar from "./component/Navbar"


const App = () => {
 

  return (
    <main className="bg-black">
      <Navbar />
      <Hero/>
      <Highlights/>
      <Model/>
    </main>
  )
}

export default App
