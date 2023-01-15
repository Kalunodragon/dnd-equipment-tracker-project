import React from "react";

function Inventory({ items }) {
    const itemsToDisplay = [...items].sort((a, b) => {
        if(a.key > b.key){
            return 1
        }
        if(b.key > a.key){
            return -1
        }
        return 0
    })

    return (
        <div className="inventory">
    	    <h1>Current Inventory!</h1>
                <p className="home">
                    This is a alphabitized version of the items that you currently carry in your bag.
                    Here you can also find items added from the form tab as well. Happy travels! ... Maybe
                </p>
                <br/>
                <div className="card-container">
      	            {itemsToDisplay}
                </div>
        </div>
    )
}

export default Inventory