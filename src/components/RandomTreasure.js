import React, { useState } from "react";

function RandomTreasure({ items }) {
    const [num, setNum] = useState(0)
    const randomList = [...items].sort(() => (Math.random() > .5 ? 1 : -1)).slice(0, num)

    function handleClick(e){
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
            <h1>RandomTreasure TEST</h1>
            <button className="randomBtn" name="more" onClick={handleClick}>More</button>
            <h1>{num}</h1>
            <button className="randomBtn" name="less" onClick={handleClick}>Less</button>
            <br/>
            <br/>
            <div className="card-container">
                {randomList}
            </div>
        </div>
    )
}

export default RandomTreasure