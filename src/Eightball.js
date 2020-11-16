import React, { useState } from 'react';
import { getRandomAnswer } from './helpers';
import './Eightball.css';
import Counter from './Counter';

const Eightball = (props) => {
    const [color, setColor] = useState("black");
    const[msg, setMsg] = useState("Think of a Question");
    const[colorCount, setColorCount] = useState({"red": 0, "green": 0, "goldenrod": 0})

    function handleClick() {
        const rand = getRandomAnswer()
        setColor(props[rand].color);
        setMsg(props[rand].msg);
        incrementColorCount(props[rand].color);
    };

    function incrementColorCount(color){
        colorCount[color] = colorCount[color] + 1
        setColorCount(colorCount);
    }

    function reset() {
        setColor("black");
        setMsg("Think of a Question");
        setColorCount({ "red": 0, "green": 0, "goldenrod": 0 })
    }

    return (
        <div className="Eightball">
            <button className="btn" onClick={handleClick}>
                <div className="dot" style={{backgroundColor:color}}>
                    <div className="msg">{msg}</div>
                </div>
            </button>
            <br></br>
            <button className="resetBtn" onClick={reset}>Reset</button>
            <Counter colorCount={colorCount} />
        </div>
    )
}



Eightball.defaultProps = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
]

export default Eightball;