import React, { useState } from 'react'
import { Stage, Layer, Line, Text } from 'react-konva'
import { makeStyles } from '@material-ui/core/styles'

const TestCanvas = () => {
  const [lines, setLines] = useState([])
  const [drawing, setDrawing] = useState(false)
  const [stageRef, setStageRef] = useState()

  const handleMouseDown = () => {
    setDrawing(true)
    setLines([...lines, []])
  }
  const handleMouseUp = () => {
    setDrawing(false)
  }
  const handleMouseMove = (e) => {
    if (drawing === true) {
      console.log(drawing)
      const stage = stageRef.getStage()
      const point = stage.getPointerPosition()
      const tempLines = lines
      let lastLine = tempLines[tempLines.length - 1]
      lastLine = lastLine.concat([point.x, point.y])
      tempLines.splice(tempLines.length - 1, 1, lastLine)
      setLines(tempLines.concat())
    }
  }

  return (
    <div>
      <div>
        {' '}
        <Stage
          width={window.innerWidth - 30}
          height={500}
          onContentMousedown={handleMouseDown}
          onContentMousemove={handleMouseMove}
          onContentMouseup={handleMouseUp}
          ref={(node) => {
            setStageRef(node)
          }}
          style={{ backgroundColor: 'black' }}
        >
          <Layer>
            {lines &&
              lines.map((line, i) => (
                <Line key={i} points={line} stroke='red' />
              ))}
          </Layer>
        </Stage>
      </div>
      <Stage
        width={window.innerWidth}
        height={500}
        style={{ border: '5px solid white', backgroundColor: 'black' }}
      >
        <Layer>
          {lines &&
            lines.map((line, i) => (
              <Line key={i} points={line} stroke='white' />
            ))}
        </Layer>
      </Stage>
    </div>
  )
}

export default TestCanvas
