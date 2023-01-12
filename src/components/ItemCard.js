import React from "react";

function ItemCard({ item }){
  const { name, weight, equipment_category, cost, gear_category, speed } = item
  return(
  	<div className="card">
    	<h2>{name}</h2>
    	<p>Type of item: {equipment_category.name}</p>
    	{gear_category ? <p>Gear type: {gear_category.name}</p> : null}
    	{speed ? <p>Speed: {speed.quantity}{speed.unit}</p> : null}
    	<p>weight: {weight}</p>
    	<p>cost: {cost.quantity} {cost.unit}</p>
    </div>
  )
}

export default ItemCard