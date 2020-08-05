import React from 'react'
import Konva from 'konva'
import { Rect, Stage, Layer } from 'react-konva'

const TestKonva = () => {
  const handleDragStart = (e) => {
    e.target.setAttrs({
      shadowOffset: {
        x: 15,
        y: 15,
      },
      scaleX: 1.1,
      scaleY: 1.1,
    })
  }
  const handleDragEnd = (e) => {
    e.target.to({
      duration: 0.5,
      easing: Konva.Easings.ElasticEaseOut,
      scaleX: 1,
      scaleY: 1,
      shadowOffsetX: 5,
      shadowOffsetY: 5,
    })
  }
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect
          x={20}
          y={50}
          width={250}
          height={125}
          fill='red'
          shadowBlur={10}
          draggable
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        />
      </Layer>
    </Stage>
  )
}
export default TestKonva
