import React from 'react';
import { Animated } from "react-animated-css";


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      warning: false,
      warningValue: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.username) {
      this.setState({warning: true, warningValue: 'username'})
    } else if (this.props.formType == "signup" && !this.state.email) {
      this.setState({warning: true, warningValue: 'email'})
    } else if (this.state.password < 6) {
      this.setState({warning: true, warningValue: 'password'})
    } else {
      const user = Object.assign({}, this.state);
      this.props.processForm(user);
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    const renderWarning = () => (
      <Animated animationIn="slideInRight" animationOut="zoomOutLeft" isVisible={true}>
      <div className="alert alert-danger" role="alert" style={{ fontSize: "12px", width: "fit-content", marginLeft: "55px", marginTop: "10px", marginBottom: "0px"}}>
        Please enter a valid {this.state.warningValue}
      </div>
      </Animated>
    )

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to the Book Exchange
          <br />
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            {this.props.formType == "signup" &&
            <div className="login-form">
              <br />
              <label>Email:
                <input type="email"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"
                />
              </label>
            </div> 
            }
            <br />
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
          {this.state.warning ? renderWarning() : null}
        </form>
      </div>
    );
  }
}

export default SessionForm;