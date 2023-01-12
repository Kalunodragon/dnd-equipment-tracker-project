import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

function FullEquipmentList({ items }) {
    const [fetchedItems, setFetchedItems] = useState([])
    const results = items.results

    useEffect(() => {
        results.forEach(item => {
            fetch(`http://www.dnd5eapi.co${item.url}`)
                .then(r => r.json())
                .then(d => setFetchedItems(previous => [...previous, <ItemCard item={d} />]))
        })
    }, [])

    // Find a way to add nested fetch data to show when clicking on the name of an item


    return (
        <div>
            <h1>FullEquipmentList TEST</h1>
            {fetchedItems}
        </div>
    )
}

export default FullEquipmentList