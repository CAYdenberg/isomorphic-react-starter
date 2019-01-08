import React from 'react'

import EmailField from './EmailField'

const emailValidator = require('email-validator')

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = props.state

    this._handleChange = this._handleChange.bind(this)
  }

  _handleChange(e) {
    this.setState({
      email: e.target.value,
      showValidation: true
    })
  }

  render() {
    const {state} = this
    const isValid = emailValidator.validate(state.email)

    return (
      <div className="container">
        <form method="GET" action="." noValidate>

          <EmailField
            value={state.email}
            isValid={isValid}
            showValidation={state.showValidation}
            onChange={this._handleChange}
          />

          <button type="submit" className="button is-success">Submit</button>
        </form>
      </div>
    )
  }
}

export default App
