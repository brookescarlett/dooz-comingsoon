import React, { Component } from 'react'

export default class ThanksText extends Component {

    render() {
        console.log(localStorage.email)
        return(
            <div>

                <p class="thank-you">  Hi {localStorage.email ? localStorage.email : null}!</p>
                <p class="thank-you"> Thank you for signing up. Check your inbox for exclusive Dooz updates. </p>
                <p class="thank-you"> See you March 2019!</p>

            </div>
        )
    }
}
