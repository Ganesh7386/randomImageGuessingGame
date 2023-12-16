import {Component} from 'react'

import Header from '../AppHeader/index'
import GameBody from '../GameBody/index'

import './index.css'

class CompleteApplication extends Component {
  state = {
    timeInSeconds: 60,
    score: 0,
  }

  timerId = null

  componentDidMount() {
    this.reduceTimer()
  }

  updateScore = () => {
    this.setState(prevState => ({score: prevState.score + 1}))
  }

  reduceTimer = () => {
    this.timerId = setInterval(() => {
      const {timeInSeconds} = this.state
      this.setState(prevState => ({
        timeInSeconds: prevState.timeInSeconds - 1,
      }))
      if (timeInSeconds === 1) {
        clearInterval(this.timerId)
      }
    }, 1000)
  }

  render() {
    const {timeInSeconds, score} = this.state
    const {imagesList, tabsList} = this.props
    return (
      <div>
        <Header score={score} timeInSeconds={timeInSeconds} />
        <GameBody
          updateScore={this.updateScore}
          imagesList={imagesList}
          tabsList={tabsList}
        />
      </div>
    )
  }
}

export default CompleteApplication
