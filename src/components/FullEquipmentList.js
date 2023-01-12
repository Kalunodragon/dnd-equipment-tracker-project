import React from "react";

function FullEquipmentList({ items }) {
// Add some kind of sorting buttons that will allow a user to filter out items looking for specific items
// also add some sort of search feature that uses a controled searchbar
  return (
  	<div className="equipment">
    	<h1>Full list of items from 5E!</h1>
      <div className="card-container">
      	{items}
      </div>
    </div>
  )
}

export default FullEquipmentList