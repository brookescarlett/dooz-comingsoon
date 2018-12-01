import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sign: this.props.sign, 
        }
    }

    render() {
        console.log(this.props.email)
        return (

                <div id="mc_embed_signup">
                    <form action="https://twitter.us19.list-manage.com/subscribe/post?u=df9cb29c90a8fb08314d143f8&amp;id=ace1c561d7" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                        <div id="mc_embed_signup_scroll">
                            <div class="mc-field-group">
                                <input type="email" name="EMAIL" class="required email" value={this.props.email} id="mce-EMAIL" onChange={this.props.changeEmail} className="input-box" />
                            </div>

                            <div class="mc-field-group input-group">
                                <input placeholder={this.state.sign} className="input-box" onClick={this.props.handleClick} />     
                            </div>

                            <div id="mce-responses" class="clear">
                                <div class="response" id="mce-error-response" style={{display: "none"}}></div>
                                <div class="response" id="mce-success-response" style={{display: "none"}}></div>
                            </div> 
                            
                            <div style={{position: "absolute", left: "-5000px", ariaHidden: "true"}}><input type="text" name="b_df9cb29c90a8fb08314d143f8_ace1c561d7" tabindex="-1" value=""/></div>
                            <div class="clear"><input type="submit" value="sign up" name="subscribe" id="mc-embedded-subscribe" className="submit"/></div>
                        </div>
                    </form>
                </div>

        )
    }
}
