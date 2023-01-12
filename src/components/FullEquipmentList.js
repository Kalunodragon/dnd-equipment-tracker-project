import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

function FullEquipmentList({ items }) {
    const [fetchedItems, setFetchedItems] = useState([])
    const results = items.results

    useEffect(() => {
        results.forEach(item => {
            fetch(`http://www.dnd5eapi.co${item.url}`)
                .then(r => r.json())
                .then(d => 
                    setFetchedItems(previous => 
                        [...previous, <ItemCard key={d.index} item={d} />]
                    ))
            })
    }, [])


    return (
        <div>
            <h1>All 5E Items</h1>
            <div className="card-container">
                {fetchedItems}
            </div>
        </div>
    )
}

export default FullEquipmentList