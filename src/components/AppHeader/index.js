import './index.css'

function Header(props) {
  const {score, timeInSeconds} = props

  const renderTimeInSeconds = () => {
    if (timeInSeconds < 10) {
      return `0${timeInSeconds}`
    }
    return `${timeInSeconds}`
  }
  return (
    <div className="headerContainer">
      <p>Score : {score}</p>
      <p>Time : {renderTimeInSeconds()}</p>
    </div>
  )
}

export default Header
