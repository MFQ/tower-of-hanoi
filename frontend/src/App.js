import React, {useState} from 'react';


import StageView from './stage-view';
import Toolbar from './toolbar';
import ActivityLog from "./activity-logs"
import "./App.css"

const App = () => {

  const [numberOFPegs, setNumberOfPegs] = useState(3)
  const [playing, setPlaying] = useState(false)
  const [renderSteps, setRenderSteps] = useState([])

  const startPlay = () => setRenderSteps([]) || setPlaying(true);
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
        isDragable={false} 
        playing={playing} 
        setPlaying={setPlaying}
        logStep={logStep}
      />
      {
        playing ? <div className='rendering-msg'>{`rendering moves for ${numberOFPegs} pegs ......` }</div>
        :
        
          <Toolbar 
            value={numberOFPegs}  
            startPlay={startPlay}
            incrementPeg={incrementPeg}
            decrementPeg={decrementPeg}
          />
      }
      <ActivityLog renderSteps={renderSteps}/>
    </>

  );

}

export default App;

