import React, { useEffect, useState } from "react";

function App() {
  const [itemsInBag, setItemsInBag] = useState([])

  // const API = "https://www.dnd5eapi.co/api/equipment"

  useEffect(() => {
    fetch("http://localhost:3001/equipment/")
    .then(r => r.json())
    .then(d => setItemsInBag(d))
  }, [])

  return (
    <h1>TESTING</h1>
  )
}

export default App;
