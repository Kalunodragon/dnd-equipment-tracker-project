import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Inventory from "./Inventory";
import Home from "./Home";
import Navbar from "./Navbar";
import Form from "./Form";
import FullEquipmentList from "./FullEquipmentList";
import RandomTreasure from "./RandomTreasure";
import ItemCard from "./ItemCard";

function App() {
  const [itemsInBag, setItemsInBag] = useState([])
  const [itemList, setItemList] = useState([])
  const [initialItemList, setInitialItemList] = useState([])

  const bagList = itemsInBag.map(item => {
    return(
      <ItemCard
        key={item.id ? item.id : item.name}
        item={item}
        typeOfClick={handleInventoryClick}
      />
    )
  })

  const API = "https://www.dnd5eapi.co/api/equipment"
  const LOCAL = "http://localhost:3001/equipment/"

  useEffect(() => {
    fetch(LOCAL)
    .then(r => r.json())
    .then(d => setItemsInBag(d))

    fetch(API)
    .then(r => r.json())
    .then(d => setInitialItemList(d.results))
  }, [])

  useEffect(() => {
      initialItemList.forEach(item => {
        fetch(`http://www.dnd5eapi.co${item.url}`)
          .then(r => r.json())
          .then(d => setItemList(previous => 
            [
              ...previous,
              <ItemCard
                key={d.index}
                item={d}
                typeOfClick={handleListClick}
              />
            ]
          ))
      })
  }, [initialItemList])

  function handleListClick(clickedItem){
    fetch(LOCAL, {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(clickedItem)
    })
      .then(r => r.json())
      .then(d => setItemsInBag(prev => [...prev, d]))
  }

  function handleInventoryClick(clicked){
    fetch(`${LOCAL}${clicked.id}`, {
      method: "DELETE"
    })
    setItemsInBag(inBagItems => inBagItems.filter(each => each.id !== clicked.id))
  }

  return (
    <>
      <h1 id="main-header">D&D Equipment Tracker Tool</h1>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Inventory">
          <Inventory items={bagList}/>
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
