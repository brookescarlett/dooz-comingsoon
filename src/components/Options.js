import React, { Component } from 'react'
import close from '../assets/svgs/close-icon.svg'

import Input from './Input'

export default class Options extends Component {
    render() {
        return (
            <div className="input-group form-input animated fadeIn delay 4s">
                <img src={close} alt="close-icon" className="close-icon" onClick={() => this.props.toggleActiveComponent("Form")} />
                <ul className="flex flex-wrap items-start caption list-reset">


                    <Input 
                        handleFormChange={ this.props.handleFormChange }
                        sign={ "aries: mar 21-apr 19" }
                        code={ "mce-MMERGE1-0" }
                    />

                    <Input
                        handleFormChange={ this.props.handleFormChange }
                        sign={ "libra: sep 23-oct 22" }
                        code={ "mce-MMERGE1-1" }
                    />

                    <Input
                        handleFormChange={ this.props.handleFormChange }
                        sign={ "taurus: apr 20-may 20 "}
                        code={ "mce-MMERGE1-2" }
                    />

                    <Input
                        handleFormChange={ this.props.handleFormChange }
                        sign={ "scorpio: oct 23-nov 21" }
                        code={ "mce-MMERGE1-3" }
                    />

                    <Input
                        handleFormChange={ this.props.handleFormChange }
                        sign={ "gemini: may 21-june 20" }
                        code={ "mce-MMERGE1-4" } 
                    />

                    <Input
                        handleFormChange={ this.props.handleFormChange }
                        sign={ "sagittarius: nov 22-dec 21" }
                        code={ "mce-MMERGE1-5" }
                    />

                    <Input
                        handleFormChange={ this.props.handleFormChange }
                        sign={ "cancer: jun 21-jul 22" }
                        code={ "mce-MMERGE1-6" }
                    />

                    <Input
                        handleFormChange={ this.props.handleFormChange }
                        sign={ "capricorn: dec 22-jan 19" }
                        code={ "mce-MMERGE1-7" }
                    />

                    <Input
                        handleFormChange={ this.props.handleFormChange }
                        sign={ "leo: jul 22-aug 22" }
                        code={ "mce-MMERGE1-8" }
                    />

                    <Input
                        handleFormChange={ this.props.handleFormChange }
                        sign={ "aquarius: jan 20-feb 18" }
                        code={ "mce-MMERGE1-9" }
                    />

                    <Input
                        handleFormChange={ this.props.handleFormChange }
                        sign={ "virgo: aug 23-sep 22" }
                        code={ "mce-MMERGE1-10" }
                    />

                    <Input
                        handleFormChange={ this.props.handleFormChange }
                        sign={ "pisces: feb 19-mar 20" }
                        code={ "mce-MMERGE1-11" }
                    />
                    
                </ul>
            </div>
        )
    }
}
