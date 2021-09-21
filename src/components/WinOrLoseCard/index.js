// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWon, resetGame, score} = props

  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  console.log(imageUrl)
  const gameStatus = isWon ? 'You Won' : 'You Loss'
  const gameLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="card-container">
      <div>
        <h1 className="your">{gameStatus}</h1>
        <p className="best-score">{gameLabel}</p>
        <p className="scoreboard">{score}/12</p>
        <button type="button" onClick={resetGame} className="play-again-button">
          Play Again
        </button>
      </div>
      <img src={imageUrl} alt="win or lose" className="state-card" />
    </div>
  )
}
export default WinOrLoseCard
