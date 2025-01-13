import Hero from "./component/Hero"
import Highlights from "./component/Highlights"
import Navbar from "./component/Navbar"


const App = () => {
 

  return (
    <main className="bg-black">
      <Navbar />
      <Hero/>
      <Highlights/>
    </main>
  )
}

export default App
