import React from "react";
import { Layer, Rect } from 'react-konva';
import { MaxHeight, TowersPlacement } from "../common/constant"

const Tower = ({ onDragMove, input, towrNumber, onDragEnd, isDragable }) => (
  <Layer>
    {
      input.map( (i, index)  => {
        const pegWidth = 20 + (i  * 20 )
        const offSetX = TowersPlacement[towrNumber] - pegWidth / 2
        const offSetY = MaxHeight - 40 - (30 * (input.length - index) )
        return (
          <Rect
            name={`${i}`}
            key={i}
            x={offSetX}
            y={offSetY}
            width={pegWidth}
            height={20}
            fill="red"
            draggable={isDragable}
            shadowBlur={10}
            cornerRadius={10}
            onDragMove={onDragMove}
            onDragEnd={onDragEnd}   
          />
        )
      })
    }
  </Layer>
);

export default Tower;