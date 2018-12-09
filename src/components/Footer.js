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
                        <div id="Facebook" className="social-icons"></div>
                        <div id="Instagram" className="social-icons"></div>
                        <div id="Twitter" className="social-icons"></div>

                    </div>
                )}
               
                <div>
                    <p className="desktop-launch">launching 2019</p>   
                </div>
            </div>
        )
    }
}
