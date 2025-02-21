import React from "react";
import NavBar from "./components/NavBar/NavBar";
import HomeSection from "./components/HomeSection/HomeSection";
import './App.css'
import SkillsSection from "./components/SkillsSection/SkillsSection";

function App() {

  return (
    <main>
      <NavBar/>
      <div className="mainContainer">
        <HomeSection />
        <SkillsSection />
      </div>
    </main>
  )
}

export default App
