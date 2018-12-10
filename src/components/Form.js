import React, { Component } from 'react'

export default class Form extends Component {


    render() {
        const emailCheck = { display: this.props.validEmail ? 'none' : 'block'}
        const emailBack = { backgroundColor: this.props.validEmail ? 'transparent' : 'rgb(11, 19, 45)'}
        return (

            <div id="mc_embed_signup" className="animated fadeIn delay 4s">
                    <form action="https://twitter.us19.list-manage.com/subscribe/post?u=df9cb29c90a8fb08314d143f8&amp;id=ace1c561d7" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" noValidate>
                        <div id="mc_embed_signup_scroll">
                            <div className="incorrect-email" style={emailCheck}>*Please enter a valid email address</div>
                            <div className="mc-field-group">
                                <input placeholder={this.props.email} name="email" onChange={this.props.handleFormChange} className="input-box" style={emailBack}/>
                            </div>

                            <div className="mc-field-group input-group">
                                <input placeholder={this.props.sign} className="input-box" onClick={() => this.props.toggleActiveComponent("Options")} />     
                            </div>

                            <div id="mce-responses" class="clear">
                                <div className="response" id="mce-error-response" style={{display: "none"}}></div>
                                <div className="response" id="mce-success-response" style={{display: "none"}}></div>
                            </div> 

                            <div style={{position: "absolute", left: "-5000px", ariaHidden: "true"}}><input type="text" name="b_df9cb29c90a8fb08314d143f8_ace1c561d7" tabIndex="-1" value=""/></div>

                            <div class="clear"><input type="submit" value="sign up" name="subscribe" id="mc-embedded-subscribe" className="submit" onClick={this.props.handleFormSubmit} /></div>
                        </div>
                    </form>
                </div>

        )
    }
}
