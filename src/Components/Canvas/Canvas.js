import React from 'react'
import { Stage, Layer } from 'react-konva'

const Canvas = () => {
  return (
    <Stage
      width={window.innerWidth}
      height={window.innerWidth / 10}
      style={{ border: '1px solid #8888' }}
    >
      <Layer></Layer>
    </Stage>
  )
}
export default Canvas
