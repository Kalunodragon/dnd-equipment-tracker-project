import React, { useState } from "react";

function Form({ onHandleSubmit }) {
    const [formData, setFormData] = useState({
        name: "",
        weight: "",
        equipment: "",
        cost: "",
        unit: "",
        speed: "",
        description: "",
        damage: "",
        dice: "",
        properties: "",
        range1: "",
        range2: ""
    })

    const dataToPost = {
            "desc": [formData.description],
            "index": `HB ${formData.name}`,
            "name": formData.name,
            "equipment_category": { "name": formData.equipment },
            "cost": { "quantity": formData.cost, "unit": formData.unit },
            "weight": formData.weight,
            "properties": [],
            "gear_category": { "name": "Homebrew Item" },
            "damage": {
              "damage_dice": formData.dice,
              "damage_type": { "name": formData.damage }
            },
            "speed": {
                "quantity": formData.speed,
                "unit": "ft/round"
              },
            "range": {
                "normal": "",
                "long": ""
            }
    }

    function handleChange(e){
        const location = e.target.name
        const info = e.target.value

        setFormData({
            ...formData,
            [location]: info
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        if(formData.name === '' || formData.description === '' || formData.weight === ''){
            return window.alert('Please fill in all the required forms!')
        }
        window.alert(`${formData.name}, has been added to the inventory!`)
        onHandleSubmit(dataToPost)
        setFormData({
            name: "",
            weight: "",
            equipment: "",
            cost: "",
            unit: "",
            speed: "",
            description: "",
            damage: "",
            dice: "",
            properties: "",
            range1: "",
            range2: ""
        })
    }

    return (
        <div className="form-container">
            <p id="form-info">
                Here you can enter in your own home brewed items into your Inventory.
                <br/>
                Any form elements that are bolded and or have an asterisk next to the title of the feild
                are reqired elements for the form to be able to be subitted.
                <br/>
                Any home brewed items will have a special category added to their cards in the inventory.
                Also these items may display some empty information to help distinguish them as a custom item.
            </p>
            <form>
                <strong>*Item Name </strong>
                <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Item name..">
                </input>
                <br/>
                <strong>*Item Weight </strong>
                <input
                    type='text'
                    name='weight'
                    value={formData.weight}
                    onChange={handleChange}
                    placeholder="Item Weight..">
                </input>
                <br/>
                <p>Equipment Category / Type of item</p>
                <input
                    type='text'
                    name='equipment'
                    value={formData.equipment}
                    onChange={handleChange}
                    placeholder="Equipment Category..">
                </input>
                <br/>
                <p>Item cost: Value first / Unit of currency second.</p>
                <input
                    type='number'
                    name='cost'
                    value={formData.cost}
                    onChange={handleChange}
                    min='0'
                    max='10000'
                    placeholder='Cost Value Number..'>
                </input>
                <input
                    type='text'
                    name='unit'
                    value={formData.unit}
                    onChange={handleChange}
                    placeholder='Unit of currency..'>
                </input>
                <br/>
                <p>Item Speed</p>
                <input
                    type='number'
                    name='speed'
                    value={formData.speed}
                    onChange={handleChange}
                    min='0'
                    max='120'
                    step='5'
                    placeholder='Speed in ft/round..'>
                </input>
                <br/>
                <strong>*Description</strong>
                <input
                    type='text'
                    name='description'
                    value={formData.description}
                    onChange={handleChange}
                    maxLength='350'
                    placeholder='Description of item.. max characters 350..'>
                </input>
                <p>Item Damage Type</p>
                <input
                    type='text'
                    name='damage'
                    value={formData.damage}
                    onChange={handleChange}
                    placeholder='Damage type.. Example: Slashing..'>
                </input>
                <br/>
                <p>Damage Dice</p>
                <input
                    type='text'
                    name='dice'
                    value={formData.dice}
                    onChange={handleChange}
                    placeholder='Dice to use.. Example: 1d10..'>
                </input>
                <br/>
                <p>Normal Range</p>
                <input
                    type='number'
                    name='range1'
                    value={formData.range1}
                    onChange={handleChange}
                    min='0'
                    max='200'
                    step='5'
                    placeholder='Normal range..'>
                </input>
                <br/>
                <p>Long Range</p>
                <input
                    type='number'
                    name='range2'
                    value={formData.range2}
                    onChange={handleChange}
                    min='0'
                    max='500'
                    step='5'
                    placeholder='Long range..'>
                </input>
                <input
                    className="form-submit"
                    type="submit"
                    name="submit"
                    value='Submit Item'
                    onClick={handleSubmit}>
                </input>
            </form>
        </div>
    )
}

export default Form