import React, { useState } from 'react';
import { getRandomColor, newBoxBoard, getRandomIdx } from './helpers.js'
import './ColorBoxes.css'
import ColorsList from './ColorsList.js';

function ColorBoxes(props) {
    let startingColorsBoard = newBoxBoard(props.numBoxes, props.colorList);
    const[board, setBoard] = useState(startingColorsBoard);

    function handleClick(){
        const randIdx = getRandomIdx(props.numBoxes)
        const randColor = getRandomColor(props.colorList);

        setBoard(board => {
            let copy = [...board];
            copy[randIdx] = randColor;
            return copy
        });

        let allBoxes = Array.from(document.getElementsByClassName("box"));
        allBoxes.forEach(box => box.firstChild.innerText = "")
        allBoxes[randIdx].firstChild.innerText = "changed!"
    }

    const boxComponents = board.map((squareColor, i) => <div className="box" key={i} style={{ backgroundColor: squareColor }}><span className="Changed"></span></div>)
    
    return (
        <div className="ColorBoxes">
            <section>{boxComponents}</section>
            <br></br>
            <button className="ColorBoxes-change" onClick={handleClick}>Change</button>
        </div>
    )
}

ColorBoxes.defaultProps = {"numBoxes": 16, "colorList": ColorsList}

export default ColorBoxes;