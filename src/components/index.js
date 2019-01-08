import React from 'react'

import EmailField from './EmailField'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = props.state

    this._handleChange = this._handleChange.bind(this)
  }

  _handleChange(e) {
    this.setState({
      email: e.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <form method="GET" action="." noValidate>

          <EmailField
            value={this.state.email}
            onChange={this._handleChange}
          />

          <button type="submit" className="button is-success">Submit</button>
        </form>
      </div>
    )
  }
}

export default App
