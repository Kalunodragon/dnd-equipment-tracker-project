import React from "react";

function ItemCard({ item, typeOfClick, location }){

	const { 
		name,
		weight,
		equipment_category,
		cost,
		gear_category,
		speed,
		desc,
		damage,
		properties,
		two_handed_damage,
		range
	} = item

	const description = desc.map(value => <p key={value}>{value}</p>)
	const propertyList = properties.map(prop => <li key={name + prop.name}>{prop.name}</li>)

	function handleClick(){
		if(location === 'inventory'){
			let choice = window.confirm(`Is it ok to delete ${item.name}? Or do you want to Cancel the delete?`)
			if(choice === true) typeOfClick(item)
		}
		if(location === 'fullList'){
			typeOfClick(item)
			window.alert(`${item.name} , Has been added to the inventory!`)
		}
	}

  return(
  	<div className="card" onClick={handleClick}>
    	<h2>{name}</h2>
    	<p>Type of item: {equipment_category.name}</p>
    	{gear_category ? <p>Gear type: {gear_category.name}</p> : null}
			{desc ? description : null}
			{properties.length > 0 ? <p>Item properties: {propertyList}</p> : null}
			{damage ? <p>Damage type: {damage.damage_type.name} <br/> Damage dice: {damage.damage_dice}</p> : null}
			{two_handed_damage ? <p>Two-handed damage type: {two_handed_damage.damage_type.name} <br/> Damage dice: {two_handed_damage.damage_dice}</p> : null}
			{range ? range.long ? <p>Ranges: <br/> Normal: {range.normal} <br/> Long: {range.long}</p> : <p>Range: {range.normal}</p> : null}
    	{speed ? <p>Speed: {speed.quantity}{speed.unit}</p> : null}
    	<p>Weight: {weight}</p>
    	<p>Cost: {cost.quantity} {cost.unit}</p>
    </div>
  )
}

export default ItemCard