import React, { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        weight: '',
        equipment: '',
        gear: '',
        cost: '',
        unit: '',
        speed: '',
        description: '',
        damage: '',
        dice: '',
        properties: '',
        handed: '',
        damage2: '',
        range1: '',
        range2: ''
    })

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
        const {name, description, weight} = formData
        if(name || description || weight === ''){
            return window.alert('Please fill in all the required forms!')
        }
        console.log(formData)
    }

    return (
        <div className="form-container">
            <p id="form-info">
                Here you can enter in your own home brewed items into your Inventory.
                <br/>
                Any form elements that are bolded and or have an asterisk next to the title of the feild
                are reqired elements for the form to be able to be subitted.
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
                <p>Gear Type</p>
                <input
                    type='text'
                    name='gear'
                    value={formData.gear}
                    onChange={handleChange}
                    placeholder="Gear type..">
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
                    placeholder='Speed..'>
                </input>
                <br/>
                <strong>*Description</strong>
                <textarea
                    className="description-input"
                    type='text'
                    name='description'
                    value={formData.description}
                    onChange={handleChange}
                    maxLength='350'
                    placeholder='Description of item.. max characters 350..'>
                </textarea>
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
                    type='button'
                    name="submit"
                    value='Submit Item'
                    onClick={handleSubmit}>
                </input>
            </form>
        </div>
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