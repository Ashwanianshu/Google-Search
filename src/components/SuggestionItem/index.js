import './index.css'

const SuggestionItem = props => {
  const {item, fun} = props
  const {suggestion} = item

  const putValue = () => {
    fun(suggestion)
  }

  return (
    <li className="suggestion-container">
      <p className="content">{suggestion}</p>
      <button className="btn" onClick={putValue} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="logo"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
