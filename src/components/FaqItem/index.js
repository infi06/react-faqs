// Write your code here.
import './index.css'

const FaqItem = props => {
  const {listItem, state, activeId, clickBtn} = props
  const {questionText, id, answerText} = listItem

  let isTrue = false

  if (activeId === id) {
    const {isActive} = state
    isTrue = isActive
  }
  const buttonClick = () => {
    clickBtn(id)
  }

  const imgUrl = isTrue
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

  const altText = isTrue ? 'minus' : 'plus'

  return (
    <li className="list-container">
      <div className="container">
        <h1 className="head">{questionText}</h1>
        <button className="btn" type="button" onClick={buttonClick}>
          <img src={imgUrl} className="img" alt={altText} />
        </button>
      </div>
      {isTrue && (
        <div>
          <hr />
          <p className="para">{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem
