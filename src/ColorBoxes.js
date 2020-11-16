import React, { useState } from 'react';
import { getRandomColor, newBoxBoard, getRandomIdx } from './helpers.js'
import './ColorBoxes.css'

function ColorBoxes() {
    let startingColors = newBoxBoard(16);
    const[board, setBoard] = useState(startingColors);

    function handleClick(){
        const randIdx = getRandomIdx(16)
        const randColor = getRandomColor();
        let boxes = document.getElementsByClassName("box");
        boxes[randIdx].style.backgroundColor = randColor;
        board[randIdx] = randColor;
        setBoard(board);
    }
    
    return (
        <div className="ColorBoxes">
            { board.map(square => <div className="box" key={square} style={{backgroundColor:square}}></div>) }
            <button className="ColorBoxes-change" onClick={handleClick}>Change</button>
        </div>
    )
}

export default ColorBoxes;