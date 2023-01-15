import React, { useEffect, useState } from "react";

function RandomTreasure({ items }) {
    const [num, setNum] = useState(0)
    const [more, setMore] = useState(0)
    const [display, setDisplay] = useState([])

    const shown = display.slice(0, num)

    useEffect(() => {
        setDisplay([...items].sort(() => (Math.random() > .5 ? 1 : -1)))
    },[more, items])

    function handleClick(e){
        if(e.target.name ==='new'){
            setMore(value => value + 1)
        }
        if(e.target.name === 'more'){
            setNum(value => value + 1)
        }
        if(e.target.name === 'less'){
            if(num > 0){
                setNum(value => value - 1)
            }
        }
    }

    return (
        <div className="randomTreasure">
            <h1>Random Treasure</h1>
            <p className="home">
                Here in the Random Treasure section you can select how many random items you would like to get.
                To do so just adust the number of items using the "More" or "Less" buttons below. You should see
                random items start getting added to a list of cards below. If at any point you need a new list of
                random items just click the "New Random Treasure" button and a new list of treasure will be
                generated with the currnet number of items selected. Items clicked will still be added to the inventory
                just the same as if you clicked them from the full list of items.
            </p>
            <button className="randomBtn" name="new" onClick={handleClick}>New Random Treasure</button>
            <br/>
            <br/>
            <div className="btn-container">
                <button className="randomBtn" name="less" onClick={handleClick}>Less</button>
                <h1>{num}</h1>
                <button className="randomBtn" name="more" onClick={handleClick}>More</button>
            </div>
            <br/>
            <br/>
            <div className="card-container">
                {shown}
            </div>
        </div>
    )
}

export default RandomTreasure