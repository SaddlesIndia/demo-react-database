import React from 'react'
import { Shape } from 'react-konva'

const Polygon = (props) => {
  const draw = (context, shape) => {
    context.beginPath()
    context.moveTo(...props.points[0])
    const slicedArray = props.points.slice(1)

    slicedArray.map((arrayResult) => {
      context.lineTo(...arrayResult)
    })
    context.closePath()
    // (!) Konva specific method, it is very important
    context.fillStrokeShape(shape)
  }
  return (
    <>
      {props.points.length > 2 ? (
        <Shape
          sceneFunc={(context, shape) => draw(context, shape)}
          fill='#00D2FF'
          stroke='black'
          strokeWidth={4}
          draggable
          dragDistance={10}
        />
      ) : null}
    </>
  )
}
export default Polygon
