import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function App() {
  const [itemsInBag, setItemsInBag] = useState([])

  // const API = "https://www.dnd5eapi.co/api/equipment"

  useEffect(() => {
    fetch("http://localhost:3001/equipment/")
    .then(r => r.json())
    .then(d => setItemsInBag(d))
  }, [])

  return (
    <>
      <h1 id="main-header">D&D Equipment Tracker Tool</h1>
      <Navbar />
    </>
  )
}

export default App;
