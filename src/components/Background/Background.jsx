import React from "react"
import './Background.css';
const Background = (props) => {
    const squares = [];

    for(let i = 0; i < 30; i++){
        let temp = [];
        for(let j = 0; j < 30; j++){
            temp.push(<div key={`square ${i}, ${j}`} className="square"></div>)
        }
        squares.push(temp);
    }

  return (
    <div className='backgroundContainer'>
        {squares}
    </div>
  )
};

export default Background;
