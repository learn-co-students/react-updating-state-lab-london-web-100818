// Code DigitalClicker Component Here
import React, { Component } from 'react'

class DigitalClicker extends React.Component {


    state = {
        timesClicked: 0
    }

    handleClicked = () => {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClicked} name='digital-clicker'>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker