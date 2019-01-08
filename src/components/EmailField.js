import React from 'react'

const EmailField = props => {
  return (
    <div className="field">
      <label className="label" htmlFor="email">Enter an email address</label>
      <div className="control has-icons-left has-icons-right">

        <input
          className="input"
          name="email"
          value={props.value}
          onChange={props.onChange}
        />

        <span className="icon is-left">
          <i className="fa fa-envelope"></i>
        </span>
        <span className="icon is-right">
          <i className="fa fa-check"></i>
        </span>
      </div>
    </div>
  )
}

export default EmailField
