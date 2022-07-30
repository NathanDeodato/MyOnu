import React from "react"

import './App.css'

import cHeader from "./components/header"
import cMain from "./components/main"
import cFooter from "./components/footer"

function App() {
  console.log("ⓒ NathanDeodato.Dev")
  
  return (
    <div className="divGlobal">
      {cHeader()}
      {cMain()}
      {cFooter()}
    </div>
  )
}

export default App
