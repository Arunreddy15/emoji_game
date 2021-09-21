/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojisList: [], topScore: 0, isGameInProgress: true}

  resetGame = () => {
    this.setState({clickedEmojisList: [], isGameInProgress: false})
  }

  renderScoreCard = () => {
    const {clickedEmojisList} = this.state
    const {emojisList} = this.props
    const isWon = clickedEmojisList === emojisList.length - 1
    return (
      <WinOrLoseCard
        isWon={isWon}
        resetGame={this.resetGame}
        score={clickedEmojisList.length}
      />
    )
  }

  finishGameAndSetTopScore = score => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (score > topScore) {
      newTopScore = score
    }
    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  onClickEmoji = id => {
    const {clickedEmojisList} = this.state
    const {emojisList} = this.props
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (clickedEmojisList === emojisList.length - 1) {
        this.finishGameAndSetTopScore(clickedEmojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  getShuffledEmojis = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderGameBody = () => {
    const shuffledEmojisList = this.getShuffledEmojis()

    return (
      <ul className="container">
        {shuffledEmojisList.map(each => (
          <EmojiCard
            emojiItem={each}
            key={each.id}
            onEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isGameInProgress, topScore, clickedEmojisList} = this.state

    return (
      <>
        <NavBar
          topScore={topScore}
          currentScore={clickedEmojisList.length}
          isGameInProgress={isGameInProgress}
        />
        <div className="game-container">
          {isGameInProgress ? this.renderGameBody() : this.renderScoreCard()}
        </div>
      </>
    )
  }
}
export default EmojiGame
