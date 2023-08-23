import React from 'react';

const TowerState = ({ towerName, state, className }) => 
  state.length === 0 ? <div className={className}> {`${towerName} tower has no pegs` } </div>
  : <div className={className}> {`${towerName} tower has ${state.join(",")}`} </div>

export default TowerState;