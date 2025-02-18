import AboutUs from "./components/AboutUs"
import BlogSection from "./components/blogSection"
import Clients from "./components/Clients"
import ContactUs from "./components/ContactUs"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"

function App() {

  return (
    <div className="">
      <div className="h-screen">
        <Header />
        <div className="px-12 flex flex-col gap-y-40">
          <Hero />
          <Services />
          <AboutUs />
          <BlogSection />
        </div>
        <div className="flex flex-col gap-y-40 pt-40">
          <Clients />
          <ContactUs />
        </div>
      </div>
    </div>
  )
}

export default App
