import React, { useState, useEffect } from "react";
import { Stage } from 'react-konva';

import TowerState from "../tower-state"
import Towers from "../towers"
import { generate_steps } from "../common/api"

import { TowerOne, TowerThree, TowerTwo, MaxHeight, MaxWidth, TowersPlacement } from "../common/constant";


const StageView = ({isDragable, numberOFPegs, setPlaying, playing, logStep}) => {


  const [towerOneState, setTowerOneState] = useState([1,2,3])
  const [towerTwoState, setTowerTwoState] = useState([])
  const [towerThreeState, setTowerThreeState] = useState([])

  const isValidMove = (peg, tower) => {
    if (tower.length === 0) 
      return true;
    return tower[0] > peg
  }

  const updateState = (tower, peg) => {
    if(TowerOne === tower)
      setTowerOneState([peg, ...towerOneState]);

    if(TowerTwo === tower)
      setTowerTwoState([peg, ...towerTwoState]);
    
    if(TowerTwo === tower)
      setTowerThreeState([peg, ...towerThreeState]);
  }

  const removePeg = (peg) =>  {
    if (towerOneState.includes(peg)) {
      setTowerOneState(towerOneState.filter(e => e !== peg))
      return TowerOne
    }

    if (towerTwoState.includes(peg)) {
      setTowerTwoState(towerTwoState.filter(e => e !== peg))
      return TowerTwo
    }

    if (towerThreeState.includes(peg)) {
      setTowerThreeState(towerThreeState.filter(e => e !== peg))
      return TowerThree
    }
  }

  const onDragMove = e => {

    // if(e.evt.screenY > (MaxWidth - 40)) {
    //   e.target.stopDrag()
    //   console.log("___________")
    //   // e.evt.screenY = 555
    // }

  }

  const onDragEnd = e => {

    const peg = parseInt(e.target.attrs.name);

    if (e.evt) {
      if( TowersPlacement[TowerOne] < e.evt.screenX && e.evt.screenX < TowersPlacement[TowerTwo] + 60) {
        console.log("TowerOne x="+e.evt.screenX)

        if(isValidMove(peg, towerOneState)) {
          removePeg(peg)
          setTowerOneState([peg, ...towerOneState])
        } else { 
          e.target.remove()
          updateState(removePeg(peg), peg)
        }
      }


      if( (60 + TowersPlacement[TowerTwo]) < e.evt.screenX && e.evt.screenX < TowersPlacement[TowerThree] + 100) {
        console.log("TowerTwox = "+e.evt.screenX)
        if(isValidMove(peg, towerTwoState)) {
          removePeg(peg)
          setTowerTwoState([peg, ...towerTwoState])
        } else {
          e.target.remove()
          updateState(removePeg(peg), peg)
        }
      }

      if(e.evt.screenX > TowersPlacement[TowerThree] + 100) {
        console.log("TowerThreex = "+e.evt.screenX)
        // console.log(e.target.attrs.name)
        if(isValidMove(peg, towerThreeState)) {
          removePeg(peg)
          setTowerThreeState([peg, ...towerThreeState])
        } else {
          e.target.remove()
          updateState(removePeg(peg), peg)
        }
      }

      
    }
  }


    
  useEffect( () => {

    if(playing) {
      generate_steps(numberOFPegs)
      .then(res => {        
        if(res.data) {
          const {steps} = res.data
          steps.forEach((step, i) => {
            setTimeout(() => {
              const [t1, t2, t3] = step;
              setTowerOneState(t1);
              setTowerTwoState(t2);
              setTowerThreeState(t3);
              logStep(step)
              if(i == steps.length - 1) {
                setPlaying(false)
              }
            }, i * 2000);  // one sec interval
            
          });
        }
      })
    }
  }, [playing])
  

  return (
    <Stage width={MaxWidth + 50} height={MaxHeight}>
      <TowerState input={towerOneState} isDragable={isDragable} onDragMove={onDragMove} onDragEnd={onDragEnd} towrNumber={TowerOne} />
      <TowerState input={towerTwoState} isDragable={isDragable} onDragMove={onDragMove} onDragEnd={onDragEnd} towrNumber={TowerTwo} />
      <TowerState input={towerThreeState} isDragable={isDragable} onDragMove={onDragMove} onDragEnd={onDragEnd} towrNumber={TowerThree} />
      <Towers />
    </Stage>
  )
}

export default StageView