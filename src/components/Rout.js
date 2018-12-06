import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import App from '../App'
import ThankYou from './ThankYou'


export default class Rout extends Component {

    render() {

        return (
            <Router>
                <div>
                    <Route path="/" exact component={App} />
                    <Route path="/thankyou/" component={ThankYou} />
                </div>
            </Router>
        )
    }
}
