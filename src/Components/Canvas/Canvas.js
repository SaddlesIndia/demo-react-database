import React, { useState } from 'react'
import { Stage, Layer } from 'react-konva'
import { makeStyles } from '@material-ui/core/styles'

import ToolBar from './ToolBar'
import Polygon from './CustomShape/Polygon'

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
  const [point, setPoint] = useState()
  const [currentPolygon, setCurrentPolygon] = useState(0)
  const [polygons, setPolygons] = useState([])
  const [color, setColor] = useState('red')

  const handleClick = (e) => {
    let tpls = polygons || []
    let tpl = tpls[currentPolygon] || []
    tpl = tpl.concat(Array.of(Array.of(e.evt.x, e.evt.y - 50)))
    tpls[currentPolygon] = tpl
    setPolygons(tpls)
    setColor(!color)
    console.log('running')
  }
  console.log(color)
  const exitDraw = (event) => {
    const code = event.keyCode || event.which
    if (code === 13) {
      setCurrentPolygon(currentPolygon + 1)
    }
  }

  return (
    <div className={classes.root} onKeyDown={exitDraw} tabIndex={0}>
      <ToolBar />
      <Stage
        width={window.innerWidth}
        height={window.innerWidth / 10}
        className={classes.canvas}
        onClick={handleClick}
      >
        <Layer>
          <Polygon polygons={polygons} color={color} />
        </Layer>
      </Stage>
    </div>
  )
}
export default Canvas
