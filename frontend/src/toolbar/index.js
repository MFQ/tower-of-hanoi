import React from "react"

import "./index.scss"

const ToolbarClass = "tool-bar"

const Toolbar = ({ 
  value,
  startPlay,
  incrementPeg,
  decrementPeg,
  enableFreeFlow,
  disableFreeFlow,
  freeFlow,
  doRestart
}) => (
  <div className={ToolbarClass}>
    {
      freeFlow ? <>
        <button onClick={disableFreeFlow}>Disable Free Flow </button>
        <button onClick={doRestart}>Restarts</button>
      </> 
      :
      <>
        <span> Enter Number of Pegs </span>
        <input type="number" placeholder="Enter number of pegs" value={value} disabled />
        <button onClick={incrementPeg}> + </button> 
        <button onClick={decrementPeg}> - </button>
        <button onClick={startPlay}> Play </button>
        <button onClick={enableFreeFlow}>Enable Free Flow </button>
      </>
    }
  </div>
)

export default Toolbar;