import React from 'react';
import './Counter.css'

const Counter = (props) => {
    return (
        <div className="Counter">
            <span className="greenCount">{`Green: ${props.colorCount['green']}`}</span>
            <span className="yellowCount">{`Yellow:${props.colorCount['goldenrod']}`}</span>
            <span className="redCount">{`Red: ${props.colorCount['red']}`}</span>
        </div>
    )
}

export default Counter;