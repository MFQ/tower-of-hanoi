import React from 'react';

import TowerState from "./tower-state"
import "./index.scss"

const ActivityClass = "activity-class"

const ActivityLog = ({renderSteps}) =>  (
  <div className={ActivityClass}>
    {
      renderSteps.map(step => {
        const [ tower1State, tower2State, tower3State ] = step
        return <div className={`${ActivityClass}-list`}> 
            <TowerState towerName={"A"} state={tower1State} className={`${ActivityClass}-TowerA`} />
            <TowerState towerName={"B"} state={tower2State} className={`${ActivityClass}-TowerB`} />
            <TowerState towerName={"C"} state={tower3State} className={`${ActivityClass}-TowerC`} />
          </div> 
      })
    }
  </div>
)

export default ActivityLog;