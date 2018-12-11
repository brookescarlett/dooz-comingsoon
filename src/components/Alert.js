import React, { Component } from 'react'

export default class Alert extends Component {

    render() {
        return(
            <div className="fixed top-0 left-0 right-0 bottom-0 flex flex-column justify-center items-center" style={{backgroundColor: "rgb(11, 19, 45)", color:"white", fontFamily: "Avenir Next Thin", fontSize: "24px"}}>
                <p>please rotate your phone back to portrait</p>
            </div>
        )

    }
}
