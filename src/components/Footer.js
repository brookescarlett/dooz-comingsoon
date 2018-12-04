import React, { Component } from 'react'
import Facebook from '../assets/svgs/FacebookIcon.svg'
import Instagram from '../assets/svgs/InstagramIcon.svg'
import Twitter from '../assets/svgs/TwitterIcon.svg'



export default class Footer extends Component {

    render() {
        return (
            <div className="footer flex justify-between items-center">
                <div className="flex">
                    <img src={Facebook} alt="facebook-logo" className="social-icons" />
                    <img src={Instagram} alt="facebook-logo" className="social-icons" />
                    <img src={Twitter} alt="facebook-logo" className="social-icons" />

                </div>
                <div>
                    <p className="desktop-launch">launching 2019</p>   
                </div>
            </div>
        )
    }
}
