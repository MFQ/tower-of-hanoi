import React from "react"

const Toolbar = ({ value, startPlay, incrementPeg, decrementPeg }) => (
  <div>
    <span> Enter Number of Pegs </span>
    <input type="number" placeholder="Enter number of pegs" value={value} disabled />
    <button onClick={incrementPeg}> + </button> 
    <button onClick={decrementPeg}> - </button>
    <button onClick={startPlay}> Play </button>
  </div>
)

export default Toolbar;