import React from "react";
import NavBar from "./components/NavBar/NavBar";
import HomeSection from "./components/HomeSection/HomeSection";
import './App.css'

function App() {

  return (
    <main>
      <NavBar/>
      <div className="mainContainer">
        <HomeSection />
      </div>
    </main>
  )
}

export default App
