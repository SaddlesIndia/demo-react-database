import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
  },
}))
const ToolBar = () => {
  const classes = useStyles()
  return <>ToolBar</>
}
export default ToolBar
