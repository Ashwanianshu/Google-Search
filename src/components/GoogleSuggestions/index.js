import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  searchItem = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onClickArrow = value => {
    this.setState({
      searchInput: value,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const newList = suggestionsList.filter(i =>
      i.suggestion.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg-container">
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google"
            alt="google logo"
          />
          <div className="search-container">
            <ul className="search-small-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-icon  "
                alt="search icon"
              />
              <input
                type="search"
                className="search-field"
                placeholder="Search Google"
                onChange={this.searchItem}
                value={searchInput}
              />
            </ul>
            {newList.map(i => (
              <SuggestionItem item={i} fun={this.onClickArrow} key={i.id} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
