import React from "react";
// import ItemCard from "./ItemCard";

function FullEquipmentList({ items }) {

  return (
  	<div>
    	<h1>All 5E Items</h1>
      <div className="card-container">
      	{items}
      </div>
    </div>
  )
}

export default FullEquipmentList