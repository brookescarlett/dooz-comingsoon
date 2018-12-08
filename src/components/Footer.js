import React, { Component } from 'react'
import Facebook from '../assets/svgs/fb-icon.svg'
import Instagram from '../assets/svgs/insta-ic.svg'
import Twitter from '../assets/svgs/TwitterIcon.svg'



export default class Footer extends Component {

    render() {
        return (
            <div className="footer flex justify-between items-center">
                <div className="footer-icons flex">
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
