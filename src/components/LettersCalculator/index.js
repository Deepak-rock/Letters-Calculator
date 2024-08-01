// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  lengthOfChars = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <div className="main-app-container">
          <div className="content-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label className="label" htmlFor="label">
              Enter the phrase
            </label>
            <br />
            <input
              id="label"
              type="text"
              className="input"
              placeholder="Enter the phrase"
              onChange={this.lengthOfChars}
            />
            <div className="count-container">
              <p className="count">No.of letters: {count.length}</p>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              className="image"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
