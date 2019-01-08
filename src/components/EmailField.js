import React from 'react'

const EmailField = props => {
  const className =
    (props.isValid && props.showValidation)
      ? 'is-success'
      : props.showValidation
        ? 'is-danger'
        : ''

  const rightIcon =
    (props.isValid && props.showValidation)
      ? <i className="fa fa-check"></i>
      : props.showValidation
        ? <i className="fa fa-close"></i>
        : null

  const message =
    (props.showValidation && !props.isValid)
      ? <p className="help is-danger">This email is invalid</p>
      : null

  return (
    <div className="field">
      <label className="label" htmlFor="email">Enter an email address</label>
      <div className="control has-icons-left has-icons-right">

        <input
          type="email"
          className={`input ${className}`}
          name="email"
          value={props.value}
          onChange={props.onChange}
        />

        <span className="icon is-left">
          <i className="fa fa-envelope"></i>
        </span>
        <span className="icon is-right">
          {rightIcon}
        </span>
      </div>

      {message}
    </div>
  )
}

export default EmailField
