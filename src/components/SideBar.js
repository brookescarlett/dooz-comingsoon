import React, { Component } from 'react'
import Form from '../components/Form'
import Options from '../components/Options'
import doozlogo from '../assets/svgs/dlogo.svg'



export default class SideBar extends Component {
    constructor () {
        super()
        this.state = {
            showOptions: false, 
            sign: "what's your sign?", 
            email: "what's your email?"
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
        this.setState({
            email: event.target.value,
        })
    }

    render() {
        return (
            <div className="sidebar">
                <img src={doozlogo} alt="logo" className="logo fit" />
                <p className="description">elevated closet staples inspired by the zodiac – the celestial twelve</p>
                <p className="description mobile-launch">launching 2019</p>
                {this.state.showOptions ? <Options handleClick={this.toggleDisplay} changeSign={this.changeSign} /> : <Form handleClick={this.toggleDisplay} sign={this.state.sign} email={this.state.email} changeEmail={this.changeEmail} /> }
            </div>
        )
    }
}
