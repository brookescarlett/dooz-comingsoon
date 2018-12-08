import React, { Component } from 'react'

import SideBar from './SideBar'
import Footer from './Footer'
import MobileOptions from './MobileOptions'



class ThankYou extends Component {

    render() {
        return (
            <div className="background-img fixed top-0 left-0 right-0 bottom-0">
                <div className="container flex flex-column items-around">
                    <SideBar 
                        currentPage={"ThankYou"}
                        mainText={`Hi! ${localStorage.email ? localStorage.email : null} Thank you for signing up. Check your inbox for exclusive Dooz updates. See you in March 2019!`}
                    />
                    <Footer />
                    <MobileOptions />
                </div>
            </div>
        );
    }
}

export default ThankYou;
