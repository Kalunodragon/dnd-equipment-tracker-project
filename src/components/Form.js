import React from "react";

function Form() {
    return (
        <h1>Form TEST</h1>
    )
}
// Keys needed for the Form

// name, required
// weight, if non set to 0 (number step)
// equipment_category, {equipment_category.name} (dropdown selection) type of item
// cost, if non set to 0 {quantity: 0 (number step), unit: cp (dropdown selection)}
// gear_category, (Homebrew item) - auto generate not needed in form
// speed, number step (select : 0 - 60)
// desc, 
// damage, {damage_type: {name: (dropdown selection) }, damage_dice: 1d4 (dropdown selection =)}
// properties, properties: {name: }
// two_handed_damage, 
// range, {normal: , long: }

export default Form