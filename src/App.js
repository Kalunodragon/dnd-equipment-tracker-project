import React, { useEffect, useState } from "react";

function App() {
  const [fullList, setFullList] = useState([])

  useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/equipment")
    .then(r => r.json())
    .then(d => setFullList(d))
  }, [])

  return (
    <h1>TESTING</h1>
  )
}

export default App;
