import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    height: '50px',
  },
}))
const ToolBar = () => {
  const classes = useStyles()
  return <div className={classes.toolbar}>ToolBar</div>
}
export default ToolBar
