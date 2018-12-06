import React, { Component } from 'react'
import Form from '../components/Form'
import Options from '../components/Options'
import ThanksText from '../components/ThanksText'
import doozlogo from '../assets/svgs/dlogo.svg'



export default class SideBar extends Component {
    constructor (props) {
        super(props)
        this.state = {
            showOptions: false, 
            sign: "what's your sign?", 
            email: "what's your email?", 
            mainText: props.mainText
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

    changeEmail = (event) => {
        localStorage.setItem('email', event.target.value)

        this.setState({
            email: event.target.value,
        }, () => console.log('hi', localStorage.email))
        
    }

    handleSubmit = () => {
        this.setState({
            mainText: "Thank you for signing up. Check your inbox for exclusive Dooz updates. See you in March 2019!"
        })
    }

    render() {
        return (
            <div className="sidebar">
                <img src={doozlogo} alt="logo" className="logo fit" />
                {/* {this.props.currentPage === "ThankYou" ?  : null } */}
                {this.props.currentPage !== "ThankYou" ? <><p className="description">{this.state.mainText}</p>
                <p className="description mobile-launch">launching 2019</p></> : <ThanksText /> } 
                
                
                { this.props.currentPage !== "ThankYou" ?
                    this.state.showOptions ? <Options handleClick={this.toggleDisplay} changeSign={this.changeSign} /> : <Form handleClick={this.toggleDisplay} sign={this.state.sign} email={this.state.email} changeEmail={this.changeEmail} handleSubmit={this.handleSubmit} /> : null
                }
                
            </div>
        )
    }
}
