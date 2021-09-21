// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiItem, onEmoji} = props
  const {id, emojiUrl, emojiName} = emojiItem

  const onEmojiClick = () => {
    onEmoji(id)
  }

  return (
    <li className="card-item">
      <button onClick={onEmojiClick} type="button">
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}
export default EmojiCard
