import React, { useState } from 'react'
import { Stage, Layer } from 'react-konva'
import { makeStyles } from '@material-ui/core/styles'

import ToolBar from './ToolBar'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  canvas: {
    backgroundColor: 'black',
  },
}))
const Canvas = () => {
  const classes = useStyles()

  const [points, setPoints] = useState([
    [20, 50],
    [220, 80],
    [260, 170],
  ])
  return (
    <div className={classes.root}>
      <ToolBar />
      <Stage
        width={window.innerWidth}
        height={window.innerWidth / 10}
        className={classes.canvas}
      >
        <Layer></Layer>
      </Stage>
    </div>
  )
}
export default Canvas
