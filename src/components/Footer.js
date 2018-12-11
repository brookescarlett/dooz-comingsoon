import React, { Component } from 'react'
import Facebook from '../assets/svgs/facebook-ico.svg'
import Instagram from '../assets/svgs/ig-ico.svg'
import Twitter from '../assets/svgs/tw-ico.svg'



export default class Footer extends Component {

    render() {
        console.log(this.props, window.innerWidth)
        return (
            <div className="footer flex justify-between items-center">
                { this.props.activeComponent === "Options" && window.innerWidth < 500 ? null : (
                    <div className="footer-icons flex">
                        <a 
                            href="https://www.facebook.com/dooznyc"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <img src={Facebook} alt="facebook-logo" className="social-icons" />    
                        </a>

                        <a 
                            href="https://www.instagram.com/dooznyc/?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <img src={Instagram} alt="facebook-logo" className="social-icons" />    
                        </a>


                        <a 
                            href="https://twitter.com/dooznyc"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <img src={Twitter} alt="facebook-logo" className="social-icons" />
                        </a>

                    </div>
                )}
               
                <div>
                    <p className="desktop-launch">launching 2019</p>   
                </div>
            </div>
        )
    }
}
