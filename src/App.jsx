import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import './index.css'

function App() {

  return (
    <div className="relative bg-[#f3f5fa] bg-gradient-to-r from-[#f3f5fa] via-[#e0e3eb] to-[#f3f5fa] animate-slowGradient min-h-screen no-scrollbar overflow-x-hidden">

      <img src="/assets/images/grids.svg" alt="grid" className="w-full h-screen fixed top-0 left-0 z-0 object-cover opacity-15" />
      <div className="relative z-10">
        <Header />
        {/* <div className="px-12 flex flex-col gap-y-30"> */}
        <div className="flex flex-col gap-y-30">
          <Hero />
          <AboutUs />
          <Services />
          {/* <Blog /> */}
        </div>
        <div className="flex flex-col gap-y-40 pt-40 px-12">
          {/* <Clients /> */}
          <ContactUs />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
