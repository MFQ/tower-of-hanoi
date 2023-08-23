import React, {useState} from 'react';


import StageView from './stage-view';
import Toolbar from './toolbar';
import ActivityLog from "./activity-logs"
import "./App.css"

const App = () => {

  const [numberOFPegs, setNumberOfPegs] = useState(3)
  const [playing, setPlaying] = useState(false)
  const [freeFlow, setFreeFlow] = useState(false)
  const [restart, setRestart] = useState(false);
  const [renderSteps, setRenderSteps] = useState([])

  const startPlay = () => setRenderSteps([]) || setPlaying(true);
  const doRestart = () => {
    setRenderSteps([]);
    setRestart(true)
  }
  const enableFreeFlow = () => {
    doRestart()
    setFreeFlow(true)
  }
  const disableFreeFlow = () => {
    doRestart()
    setFreeFlow(false)
  } 
  const incrementPeg = () => setNumberOfPegs(numberOFPegs + 1)
  const decrementPeg = () => numberOFPegs > 1 && setNumberOfPegs(numberOFPegs - 1)
  const logStep =  step => {
    renderSteps.push(step)
    setRenderSteps( [...renderSteps] )
  }

  return (
    <>
      <StageView 
        numberOFPegs={numberOFPegs} 
        isDragable={freeFlow} 
        playing={playing} 
        setPlaying={setPlaying}
        logStep={logStep}
        restart={restart}
        setRestart={setRestart}
      />
      {
        playing ? <div className='rendering-msg'>{`rendering moves for ${numberOFPegs} pegs ......` }</div>
        :
        <Toolbar 
          value={numberOFPegs}
          startPlay={startPlay}
          freeFlow={freeFlow}
          incrementPeg={incrementPeg}
          decrementPeg={decrementPeg}
          enableFreeFlow={enableFreeFlow}
          disableFreeFlow={disableFreeFlow}
          doRestart={doRestart}
        />
      }
      <ActivityLog renderSteps={renderSteps}/>
    </>

  );

}

export default App;

