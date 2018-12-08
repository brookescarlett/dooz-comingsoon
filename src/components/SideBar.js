import React, { Component } from 'react'
import Form from '../components/Form'
import Options from '../components/Options'
import MobileOptions from '../components/MobileOptions'

import ThanksText from '../components/ThanksText'
import doozlogo from '../assets/svgs/dlogo.svg'



export default class SideBar extends Component {
    constructor (props) {
        super(props)
        this.state = {
            showOptions: false, 
            sign: "what's your sign?", 
            email: "what's your email?", 
            mainText: props.mainText, 
            currentPage: "Welcome"
        }
    }

    toggleDisplay = () => {
        this.setState({ showOptions: !this.state.showOptions })
    }

    changeSign = (event) => {
        this.setState({
            sign: event.target.value, 
            showOptions: !this.state.showOptions
        })
    }

    closeWindow = () => {
        this.setState({ showOptions: !this.state.showOptions })
    }

    changeEmail = (event) => {
        localStorage.setItem('email', event.target.value)

        this.setState({
            email: event.target.value,
        }, () => console.log('hi', localStorage.email))  
    }

    validateEmail = (email) => {
        let checkEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return checkEmail.test(email)
    }

    handleChange = (value) => {
        this.setState({
            sign: value, 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.validateEmail(this.state.email))
        if (this.validateEmail(this.state.email)) {
            fetch('https://dc-server-hrdalgdski.now.sh/api/mailchimp', {
                method: "POST",
                body: JSON.stringify({ email: this.state.email, sign: this.state.sign }),
                headers: { "content-type": "application/json" }
            })
            .then(res => console.log(res))
            this.setState({
                currentPage: "ThankYou"
            })

        } else {
            console.log('here')
            window.alert("Please enter a valid email address")
        }
   
       
    }


    render() {
        console.log(window.innerWidth)
        return (
            <div className="sidebar">
                <img src={doozlogo} alt="logo" className="logo fit" />
                {/* {this.props.currentPage === "ThankYou" ?  : null } */}
                {this.state.currentPage !== "ThankYou" ? <><p className="description">{this.state.mainText}</p>
                <p className="description mobile-launch">launching 2019</p></> : <ThanksText /> } 
                
                
                { this.state.currentPage !== "ThankYou" ?
                    this.state.showOptions ? 
                        (window.innerWidth > 500 ? <Options handleClick={this.toggleDisplay} changeSign={this.changeSign} closeWindow={this.closeWindow} /> : <MobileOptions changeSign={this.handleChange} />) : <Form handleClick={this.toggleDisplay} sign={this.state.sign} email={this.state.email} changeEmail={this.changeEmail} handleSubmit={this.handleSubmit} /> : null
                }
                
            </div>
        )
    }
}
