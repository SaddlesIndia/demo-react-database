import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  swatch: {
    display: 'flex',
    flexDirection: 'column',
    height: '500px',
    width: '50px',
  },
}))

const Swatch = (props) => {
  const classes = useStyles()
  const colors = ['red', 'blue', 'green', 'yellow', 'white']
  return (
    <div className={classes.swatch}>
      {colors.map((color) => (
        <div
          style={{ backgroundColor: color, flexGrow: '1' }}
          onClick={() => props.setCurrentColor(color)}
        />
      ))}
    </div>
  )
}
export default Swatch
