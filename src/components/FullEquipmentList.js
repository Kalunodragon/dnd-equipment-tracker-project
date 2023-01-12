import React from "react";
// import ItemCard from "./ItemCard";

function FullEquipmentList({ items }) {
// Add some kind of sorting buttons that will allow a user to filter out items looking for specific items
// also add some sort of search feature that updated with each letter added
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