import React, { Component } from 'react'
import Form from '../components/Form'
import Options from '../components/Options'
import MobileOptions from '../components/MobileOptions'

import ThanksText from '../components/ThanksText'
import doozlogo from '../assets/svgs/dlogo.svg'



export default class SideBar extends Component {
    render() {
        return (
            <div className="sidebar">
                <img src={doozlogo} alt="logo" className="logo fit" />
                
                {this.props.activeComponent !== "ThankYou" ? <><p className="description">{this.props.mainText}</p>
                <p className="description mobile-launch">launching 2019</p></> : <ThanksText /> } 
                
                
                { this.props.activeComponent !== "ThankYou" ?
                    this.props.activeComponent === "Options" ? 
                        (window.innerWidth > 500 ? 
                            <Options 
                                toggleActiveComponent={this.props.toggleActiveComponent}
                                handleFormChange={this.props.handleFormChange} /> 
                            : 
                            <MobileOptions 
                                handleMobileFormChange={this.props.handleMobileFormChange}
                                toggleActiveComponent={this.props.toggleActiveComponent} />
                        ) : 
                            <Form 
                                toggleActiveComponent={this.props.toggleActiveComponent} 
                                sign={this.props.sign} 
                                email={this.props.email} 
                                handleFormChange={this.props.handleFormChange}
                                handleFormSubmit={this.props.handleFormSubmit} 
                                validEmail={this.props.validEmail} 
                                
                                /> 
                        : null
                }
                
            </div>
        )
    }
}
