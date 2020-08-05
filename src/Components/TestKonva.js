import React, { useState } from 'react'
import Konva from 'konva'
import { Rect, Stage, Layer } from 'react-konva'

const TestKonva = () => {
  const [color, setColor] = useState('red')
  const [x, setX] = useState()
  const [y, setY] = useState()
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
    setX(e.target.attrs.x)
    setY(e.target.attrs.y)
  }
  const handleClick = () => {
    if (color === 'red') {
      setColor('blue')
    } else {
      setColor('red')
    }
  }
  return (
    <>
      <Stage
        width={window.innerWidth}
        height={500}
        style={{ backgroundColor: 'black' }}
      >
        <Layer>
          <Rect
            x={10}
            y={50}
            width={250}
            height={125}
            fill={color}
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onClick={handleClick}
          />
        </Layer>
      </Stage>
      <Stage
        width={window.innerWidth}
        height={500}
        style={{ border: '5px solid white', backgroundColor: 'black' }}
      >
        <Layer>
          <Rect
            x={x || 10}
            y={y || 50}
            width={250}
            height={125}
            fill={'white'}
          />
        </Layer>
      </Stage>
    </>
  )
}
export default TestKonva
