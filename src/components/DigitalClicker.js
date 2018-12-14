// Code DigitalClicker Component Here

import React from 'react'

class DigitalClicker extends React.Component {

  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    const newCount = this.state.timesClicked + 1
    this.setState({
      timesClicked: newCount
    })
  }


  render(){
    return (
      <button type='button' onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }



}

export default DigitalClicker;
