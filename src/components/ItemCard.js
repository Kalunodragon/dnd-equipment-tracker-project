import React from "react";

function ItemCard({ item }){
    console.log(item)
    const { name, weight, equipment_category, cost, gear_category } = item
    return(
        <div className="card">
            <h3>{name}</h3>
            <p>weight: {weight}</p>
        </div>
    )
}

export default ItemCard