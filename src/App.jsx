import React from "react"

import './App.css'

import fHeader from "./components/header"
import fMain from "./components/main"
import fFooter from "./components/footer"

function App() {
  return (
    <div className="divGlobal">
      {fHeader()}
      {fMain()}
      {fFooter()}
    </div>
  )
}

export default App
