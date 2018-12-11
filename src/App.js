import React, { Component } from 'react'
import Alert from './components/Alert'
import SideBar from './components/SideBar'
import Footer from './components/Footer'


class App extends Component {

  constructor() {
    super() 

    this.state = {
      activeComponent: "Form", 
      sign: `what's your sign? ${window.innerWidth < 500 ? '' : '(optional)'}`, 
      email: "what's your email?", 
      validEmail: true,
      mainText: "elevated closet staples inspired by the zodiac — the celestial twelve", 
      fixViewPort: window.innerHeight < window.innerWidth ? true : false,
    }
  }

  componentDidMount = () => {
    console.log('hi')
    window.addEventListener('resize', this.resize)
  }

  resize = () => {
    if (window.innerHeight < window.innerWidth) { 
      this.setState({
        fixViewPort: true
      })
    } else {
      this.setState({
        fixViewPort: false
      })
    }
  }

  handleFormChange = (event) => {
    this.setState({ [event.target.name] : event.target.value})
    if (event.target.name === 'sign') {
      this.toggleActiveComponent("Form")
    } else if (event.target.name === 'email') {
      localStorage.setItem('email', event.target.value)
    }
  }

  handleMobileFormChange = (sign) => {
    this.setState ({ sign})
  }

  toggleActiveComponent = (activeComponent) => {
    this.setState({ activeComponent })
  }

  validateEmail = (email) => {
    let checkEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return checkEmail.test(email)
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(this.validateEmail(this.state.email))
    if (this.validateEmail(this.state.email)) {
      fetch('https://dc-server-svhvffgden.now.sh/api/mailchimp', {
        method: "POST",
        body: JSON.stringify({ email: this.state.email, sign: this.state.sign }),
        headers: { "content-type": "application/json" }
      })
        .then(res => console.log(res))
      this.setState({
        activeComponent: "ThankYou"
      })

    } else {
      this.setState({ validEmail: false })
    }


  }


  render() {
    console.log(this.state.fixViewPort)
    return (
      <div className="background-img fixed top-0 left-0 right-0 bottom-0">
        <div className="container flex flex-column items-around">
          {this.state.fixViewPort ? 
              <Alert />
              : 
              <>
                <SideBar 
                  handleFormChange={this.handleFormChange}
                  handleMobileFormChange={this.handleMobileFormChange}
                  handleFormSubmit={this.handleFormSubmit}
                  toggleActiveComponent={this.toggleActiveComponent}
                  email={this.state.email}
                  validEmail={this.state.validEmail}
                  sign={this.state.sign}
                  activeComponent={this.state.activeComponent}
                  mainText={this.state.mainText}
                />
                <Footer 
                  activeComponent={this.state.activeComponent}
                />
              </>

          }
        </div>
      </div>
    );
  }
}

export default App;
