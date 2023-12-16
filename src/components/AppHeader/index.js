import './index.css'

const headerLogoUrl =
  'https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png'

const timerLogoUrl =
  'https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png'

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
      <img
        style={{height: '50px', width: '90px'}}
        src={headerLogoUrl}
        alt="website logo"
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '200px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p>Score :</p>{' '}
          <span
            style={{
              color: ' #fec653',
              fontWeight: 'bold',
              fontSize: '20px',
              marginLeft: '5px',
            }}
          >
            {score}
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
          }}
        >
          <img
            src={timerLogoUrl}
            alt="timer"
            style={{height: '20px', width: '20px'}}
          />
          <p>{renderTimeInSeconds()} sec</p>
        </div>
      </div>
    </div>
  )
}

export default Header
