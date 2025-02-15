import AboutUs from "./components/AboutUs"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"

function App() {

  return (
    <div className="">
      <div className="h-screen">
        <Header />
        <div className="px-12 flex flex-col gap-y-20">
          <Hero />
          <Services />
          <AboutUs />
        </div>
      </div>
    </div>
  )
}

export default App
