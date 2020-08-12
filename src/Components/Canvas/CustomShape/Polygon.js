import React from 'react'
import { Shape } from 'react-konva'

const Polygon = (props) => {
  const draw = (context, shape, polygon) => {
    context.beginPath()
    context.moveTo(...polygon[0])
    const slicedArray = polygon.slice(1)

    slicedArray.map((arrayResult) => {
      context.lineTo(...arrayResult)
    })
    context.closePath()
    // (!) Konva specific method, it is very important
    context.fillStrokeShape(shape)
  }

  return (
    <>
      {props.polygons.map((polygon) => {
        return (
          <Shape
            sceneFunc={(context, shape) => draw(context, shape, polygon)}
            fill={'red'}
            stroke='white'
            strokeWidth={4}
            draggable
            dragDistance={10}
          />
        )
      })}
    </>
  )
}
export default Polygon
