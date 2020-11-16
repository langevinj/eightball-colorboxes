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
        let boxes = document.getElementsByClassName("box");
        for(let box of boxes){
            if (box.firstChild.innerText = "changed!"){
                box.firstChild.innerText = ""
            }
        }
        boxes[randIdx].style.backgroundColor = randColor;
        boxes[randIdx].firstChild.innerText = "changed!";
        board[randIdx] = randColor;
        setBoard(board);
    }
    
    return (
        <div className="ColorBoxes">
            { board.map(square => <div className="box" key={square} style={{backgroundColor:square}}><span className="Changed"></span></div>) }
            <br></br>
            <button className="ColorBoxes-change" onClick={handleClick}>Change</button>
        </div>
    )
}

ColorBoxes.defaultProps = {"numBoxes": 16, "colorList": ColorsList}

export default ColorBoxes;