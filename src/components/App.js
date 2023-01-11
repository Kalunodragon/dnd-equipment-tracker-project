import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Inventory from "./Inventory";
import Home from "./Home";
import Navbar from "./Navbar";
import Form from "./Form";
import FullEquipmentList from "./FullEquipmentList";
import RandomTreasure from "./RandomTreasure";

function App() {
  const [itemsInBag, setItemsInBag] = useState([])
  const [itemList, setItemList] = useState([])

  const API = "https://www.dnd5eapi.co/api/equipment"

  useEffect(() => {
    fetch("http://localhost:3001/equipment/")
    .then(r => r.json())
    .then(d => setItemsInBag(d))

    fetch(API)
    .then(r => r.json())
    .then(d => setItemList(d))
  }, [])

  return (
    <>
      <h1 id="main-header">D&D Equipment Tracker Tool</h1>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Inventory">
          <Inventory items={itemsInBag}/>
        </Route>
        <Route exact path="/Form">
          <Form />
        </Route>
        <Route exact path="/EquipmentList">
          <FullEquipmentList items={itemList}/>
        </Route>
        <Route exact path="/RandomTreasure">
          <RandomTreasure />
        </Route>
      </Switch>
    </>
  )
}

export default App;
