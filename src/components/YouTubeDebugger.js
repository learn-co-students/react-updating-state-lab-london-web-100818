// Code YouTubeDebugger Component Here

import React from 'react'

class YouTubeDebugger extends React.Component {

  constructor(){
    super()
    this.state =   {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }
    }

    handleClickBitrate = () => {
      this.setState({
        settings: {
          bitrate: 12,
          video: {
            resolution: '1080p'
          }
        }
      })
    }

    handleClickResolution = () => {
      this.setState({
        settings: {
          bitrate: 8,
          video: {
            resolution: '720p'
          }
        }
      })
    }


  render () {
    return (
      <div>
      <button type='button' className='bitrate' onClick={this.handleClickBitrate}>Click</button>

      <button type='button' className='resolution' onClick={this.handleClickResolution}>Me</button>
      </div>
    )
  }



}

export default YouTubeDebugger;
