import React from "react"
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";

function App() {

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-tertiary">
      <div className="bg-pattern bg-cover bg-no-repeat bg-center">
        <Home />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
