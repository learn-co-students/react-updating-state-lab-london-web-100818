import React, {Component} from 'react'

class DigitalClicker extends Component{
  constructor(){
    super()
    this.state={
      timesClicked: 0
    }
  }
  handleClick = () => {
    const newValue = this.state.timesClicked + 1
    this.setState(
    {
      timesClicked: newValue
    }
  )}

render(){
  return(
    <button onClick={this.handleClick}>{this.state.timesClicked}</button>
  )
}
}
export default DigitalClicker
