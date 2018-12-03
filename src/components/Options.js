import React, { Component } from 'react'

export default class Options extends Component {
    render() {
        return (
            <div className="input-group form-input animated fadeIn delay 4s">
                <ul className="flex flex-wrap items-start caption list-reset">
                    <li className="al-items"><input className="rad" onClick={this.props.changeSign} type="radio" value="aries: mar 21-apr 19" name="MMERGE1" id="mce-MMERGE1-0" /><label className="opt" htmlFor="mce-MMERGE1-0">aries: mar 21-apr 19</label></li>
                    <li className="al-items"><input className="rad" onClick={this.props.changeSign} type="radio" value="libra: sep 23-oct 22" name="MMERGE1" id="mce-MMERGE1-1" /><label className="opt" htmlFor="mce-MMERGE1-1">libra: sep 23-oct 22</label></li>
                    <li className="al-items"><input className="rad" onClick={this.props.changeSign} type="radio" value="taurus: apr 20-may 20" name="MMERGE1" id="mce-MMERGE1-2" /><label className="opt" htmlFor="mce-MMERGE1-2">taurus: apr 20-may 20</label></li>
                    <li className="al-items"><input className="rad" onClick={this.props.changeSign} type="radio" value="scorpio: oct 23-nov 21" name="MMERGE1" id="mce-MMERGE1-3" /><label className="opt" htmlFor="mce-MMERGE1-3">scorpio: oct 23-nov 21</label></li>
                    <li className="al-items"><input className="rad" onClick={this.props.changeSign} type="radio" value="gemini: may 21-june 20" name="MMERGE1" id="mce-MMERGE1-4" /><label className="opt" htmlFor="mce-MMERGE1-4">gemini: may 21-june 20</label></li>
                    <li className="al-items"><input className="rad" onClick={this.props.changeSign} type="radio" value="sagittarius: nov 22-dec 21" name="MMERGE1" id="mce-MMERGE1-5" /><label className="opt" htmlFor="mce-MMERGE1-5">sagittarius: nov 22-dec 21</label></li>
                    <li className="al-items"><input className="rad" onClick={this.props.changeSign} type="radio" value="cancer: jun 21-jul 22" name="MMERGE1" id="mce-MMERGE1-6" /><label className="opt" htmlFor="mce-MMERGE1-6">cancer: jun 21-jul 22</label></li>
                    <li className="al-items"><input className="rad" onClick={this.props.changeSign} type="radio" value="capricorn: dec 22-jan 19" name="MMERGE1" id="mce-MMERGE1-7" /><label className="opt" htmlFor="mce-MMERGE1-7">capricorn: dec 22-jan 19</label></li>
                    <li className="al-items"><input className="rad" onClick={this.props.changeSign} type="radio" value="leo: jul 22-aug 22" name="MMERGE1" id="mce-MMERGE1-8" /><label className="opt" htmlFor="mce-MMERGE1-8">leo: jul 22-aug 22</label></li>
                    <li className="al-items"><input className="rad" onClick={this.props.changeSign} type="radio" value="aquarius: jan 20-feb 18" name="MMERGE1" id="mce-MMERGE1-9" /><label className="opt" htmlFor="mce-MMERGE1-9">aquarius: jan 20-feb 18</label></li>
                    <li className="al-items"><input className="rad" onClick={this.props.changeSign} type="radio" value="virgo: aug 23-sep 22" name="MMERGE1" id="mce-MMERGE1-10" /><label className="opt" htmlFor="mce-MMERGE1-10">virgo: aug 23-sep 22</label></li>
                    <li className="al-items"><input className="rad" onClick={this.props.changeSign} type="radio" value="pisces: feb 19-mar 20" name="MMERGE1" id="mce-MMERGE1-11" /><label className="opt" htmlFor="mce-MMERGE1-11">pisces: feb 19-mar 20</label></li>
                </ul>
            </div>
        )
    }
}
