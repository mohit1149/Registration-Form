// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    status: false,
    hide: false,
    hide1: false,
  }

  onClickButton = () =>
    this.setState({
      firstName: '',
      lastName: '',
      status: false,
      hide: false,
      hide1: false,
    })

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName !== '' && lastName !== '') {
      this.setState({status: true})
    } else if (firstName === '' && lastName === '') {
      this.setState({hide1: true, hide: true})
    } else if (lastName === '') {
      this.setState({hide: true})
    } else if (firstName === '') {
      this.setState({hide1: true})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  eventHandler = event => {
    if (event.target.value === '') {
      this.setState({hide: true})
    } else {
      this.setState({hide: false})
    }
  }

  eventHandler1 = event => {
    if (event.target.value === '') {
      this.setState({hide1: true})
    } else {
      this.setState({hide1: false})
    }
  }

  firstPage = () => (
    <>
      <form onSubmit={this.submitForm}>
        <div className="inputs-container">{this.renderFirstNameField()}</div>
        <div className="inputs-container">{this.renderLastNameField()}</div>
        <div className="button-container">
          <button className="button" type="submit">
            submit
          </button>
        </div>
      </form>
    </>
  )

  secondPage = () => (
    <>
      <div className="button-container">
        <img
          className=""
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
        />
      </div>
      <p className="first-name-label">Submitted Successfully</p>
      <div className="button-container">
        <button className="button" type="submit" onClick={this.onClickButton}>
          Submit Another Response
        </button>
      </div>
    </>
  )

  renderFirstNameField = () => {
    const {firstName, hide1} = this.state
    return (
      <>
        <label className="first-name-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <br />
        <input
          type="text"
          id="firstName"
          className="first-name-input-filled"
          value={firstName}
          onChange={this.onChangeFirstName}
          placeholder="First name"
          onBlur={this.eventHandler1}
        />
        {hide1 && <p>Required</p>}
      </>
    )
  }

  renderLastNameField = () => {
    const {lastName, hide} = this.state
    return (
      <>
        <label className="first-name-label" htmlFor="lastName">
          LAST NAME
        </label>
        <br />
        <input
          type="text"
          id="lastName"
          className="first-name-input-filled"
          value={lastName}
          onChange={this.onChangeLastName}
          placeholder="Last name"
          onBlur={this.eventHandler}
        />
        {hide && <p>Required</p>}
      </>
    )
  }

  render() {
    const {status} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        <div className="input-container">
          {status ? this.secondPage() : this.firstPage()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
