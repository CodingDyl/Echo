import React from "react"
import { BrowserRouter } from "react-router-dom";
import { Home, Navbar, Contact, Footer } from "./components";

function App() {

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-tertiary">
      <div className="bg-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Home />
      </div>
      <Contact />
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App
