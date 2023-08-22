import React from "react";
import { Layer, Line } from 'react-konva';
import { TowerOne, TowerThree, TowerTwo, TowersPlacement, MaxHeight, MaxWidth, OriginX, OriginY } from "../common/constant"

const Towers = () => (
  <Layer>
    <Line
      x={OriginX}
      y={MaxHeight - 50}
      points={[0, 0, MaxWidth, 0]}
      tension={0.5}
      closed
      stroke="black"
    />
    <Line
      x={TowersPlacement[TowerOne]}
      y={OriginY}
      points={[0, MaxHeight -100, 0, 0]}
      tension={0.5}
      closed
      stroke="black"
      on
    />

    <Line
      x={TowersPlacement[TowerTwo]}
      y={OriginY}
      points={[0, MaxHeight - 100, 0, 0]}
      tension={0.5}
      closed
      stroke="black"
    />

    <Line
      x={TowersPlacement[TowerThree]}
      y={OriginY}
      points={[0, MaxHeight - 100, 0, 0]}
      tension={0.5}
      closed
      stroke="black"
    />
  </Layer>
)

export default Towers