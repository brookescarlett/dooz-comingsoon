import React, { Component } from 'react'


export default class Footer extends Component {

    render() {
        console.log(this.props, window.innerWidth)
        return (
            <div className="footer flex justify-between items-center">
                { this.props.activeComponent === "Options" && window.innerWidth < 500 ? null : (
                    <div className="footer-icons flex">
                        {/* <img src={Facebook} alt="facebook-logo" className="social-icons" />
                        <img src={Instagram} alt="facebook-logo" className="social-icons" />
                        <img src={Twitter} alt="facebook-logo" className="social-icons" /> */}
                        <a href="https://www.facebook.com/dooznyc" target="_blank" rel="noopener noreferrer"><div id="Facebook" className="social-icons"></div></a>

                        <a href="https://www.instagram.com/dooznyc/?hl=en" target="_blank" rel="noopener noreferrer"><div id="Instagram" className="social-icons"></div></a>

                        <a href="https://twitter.com/dooznyc" target="_blank" rel="noopener noreferrer"><div id="Twitter" className="social-icons"></div></a>


                    </div>
                )}
               
                <div>
                    <p className="desktop-launch">launching 2019</p>   
                </div>
            </div>
        )
    }
}
