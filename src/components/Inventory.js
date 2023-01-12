import React from "react";

function Inventory({ items }) {
    return (
        <div className="inventory">
    	    <h1>Current Inventory!</h1>
                <div className="card-container">
      	            {items}
                </div>
        </div>
    )
}

export default Inventory