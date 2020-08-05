import React, { Component } from 'react'
import { Stage, Layer, Line, Text } from 'react-konva'
export default class Canvas extends Component {
  state = {
    lines: [],
  }
  handleMouseDown = () => {
    this._drawing = true
    this.setState({
      lines: [...this.state.lines, []],
    })
  }
  handleMouseUp = () => {
    this._drawing = false
  }
  handleMouseMove = (e) => {
    if (!this._drawing) {
      return
    }
    const stage = this.stageRef.getStage()
    const point = stage.getPointerPosition()
    const { lines } = this.state
    let lastLine = lines[lines.length - 1]
    lastLine = lastLine.concat([point.x, point.y])
    lines.splice(lines.length - 1, 1, lastLine)
    this.setState({
      lines: lines.concat(),
    })
  }
  render() {
    return (
      <>
        <Stage
          width={window.innerWidth}
          height={500}
          onContentMousedown={this.handleMouseDown}
          onContentMousemove={this.handleMouseMove}
          onContentMouseup={this.handleMouseUp}
          ref={(node) => {
            this.stageRef = node
          }}
          style={{ backgroundColor: 'black' }}
        >
          <Layer>
            {this.state.lines.map((line, i) => (
              <Line key={i} points={line} stroke='red' />
            ))}
          </Layer>
        </Stage>
        <Stage
          width={window.innerWidth}
          height={500}
          style={{ border: '5px solid white', backgroundColor: 'black' }}
        >
          <Layer>
            {this.state.lines.map((line, i) => (
              <Line key={i} points={line} stroke='white' />
            ))}
          </Layer>
        </Stage>
      </>
    )
  }
}
