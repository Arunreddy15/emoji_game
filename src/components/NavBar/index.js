// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, currentScore, isGameInProgress} = props
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="emoji logo"
            alt="emoji logo"
          />
          <h1 className="logo-name">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="scores">
            <p>Score: {currentScore} </p>
            <p>Top Score: {topScore} </p>
          </div>
        )}
      </div>
    </div>
  )
}
export default NavBar
