import AboutUs from "./components/AboutUs"
import Blog from "./components/Blog"
import Clients from "./components/Clients"
import ContactUs from "./components/ContactUs"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import './index.css'

function App() {

  return (
    <div className="relative bg-[#f3f5fa] bg-gradient-to-r from-[#f3f5fa] via-[#e0e3eb] to-[#f3f5fa] animate-slowGradient min-h-screen">
      <img src="/assets/images/grids.svg" alt="grid" className="w-full h-screen fixed top-0 left-0 z-0 object-cover opacity-15" />
      <div className="relative z-10">
        <Header />
        <div className="px-12 flex flex-col gap-y-40">
          <Hero />
          <Services />
          <AboutUs />
          {/* <Blog /> */}
        </div>
        <div className="flex flex-col gap-y-40 pt-40 px-12">
          {/* <Clients /> */}
          <ContactUs />
        </div>
      </div>
    </div>
  )
}

export default App
