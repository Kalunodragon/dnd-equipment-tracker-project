import React from "react";

function FullEquipmentList({ items }) {
    const results = items.results


    // Find a way to add nested fetch data to show when clicking on the name of an item
    const listed = results.map(item => {
        return (
            <div key={item.index}>
                {item.name}
            </div>
        )
    })

    return (
        <div>
            <h1>FullEquipmentList TEST</h1>
            {listed}
        </div>
    )
}

export default FullEquipmentList