import {Component} from 'react'

import Header from '../AppHeader/index'
import GameBody from '../GameBody/index'

import './index.css'

class CompleteApplication extends Component {
  state = {
    timeInSeconds: 60,
    score: 0,
    isGameOver: false,
  }

  timerId = null

  componentDidMount() {
    this.reduceTimer()
  }

  updateScore = () => {
    this.setState(prevState => ({score: prevState.score + 1}))
  }

  restartingWhenGameOver = () => {
    this.setState({timeInSeconds: 60, score: 0, isGameOver: false})
    this.reduceTimer()
  }

  renderGameOverModal = () => {
    const {score} = this.state
    return (
      <div className="GameEndCardContainer">
        <div className="innerContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            className="trophyStyling"
            alt="GameOverTrophy"
          />
          <h1 className="heading">Score</h1>
          <h1 className="heading">{score}</h1>
          <button type="button" onClick={this.restartingWhenGameOver}>
            Play Again
          </button>
        </div>
      </div>
    )
  }

  reduceTimer = () => {
    this.timerId = setInterval(() => {
      const {timeInSeconds} = this.state
      if (timeInSeconds === 0) {
        clearInterval(this.timerId)
        this.setState({isGameOver: true})
      } else {
        this.setState(prevState => ({
          timeInSeconds: prevState.timeInSeconds - 1,
        }))
      }
    }, 1000)
  }

  render() {
    const {timeInSeconds, score, isGameOver} = this.state
    const {imagesList, tabsList} = this.props
    return (
      <div>
        <Header score={score} timeInSeconds={timeInSeconds} />
        <>
          {isGameOver ? (
            this.renderGameOverModal()
          ) : (
            <GameBody
              updateScore={this.updateScore}
              imagesList={imagesList}
              tabsList={tabsList}
            />
          )}
        </>
      </div>
    )
  }
}

export default CompleteApplication
