import React, { Component } from 'react'
import Picker from 'react-mobile-picker';

export default class MobileOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueGroups: {
                sign: 'Sign',
            },
            optionGroups: {
                sign: ['aquarius: jan 20-feb 18', 
                'pisces: feb 19-mar 20',
                'aries: mar 21-apr 19',
                'taurus: apr 20-may 20',
                'gemini: may 21-june 20',
                'cancer: jun 21-jul 22',
                'leo: jul 22-aug 22',
                'virgo: aug 23-sep 22',
                'libra: sep 23 - oct 22',
                'scorpio: oct 23-nov 21',
                'sagittarius: nov 22-dec 21',
                'capricorn: dec 22-jan 19',               
                ],
            }, 
            isPickerShow: true
        }
    }

    handleChange = (name, value) => {
        this.setState(({ valueGroups }) => ({
            valueGroups: {
                ...valueGroups,
                [name]: value
            }
        }))
        
    }

    handleClick = () => {
        console.log('here', this.state.isPickerShow)
        this.setState({ isPickerShow: false })
    }

    togglePicker = (event) => {
        console.log('here', this.state.isPickerShow)
        this.props.changeSign(event.target.value)
        this.setState({
            isPickerShow: false
        })
    }

    render() {  
        const { optionGroups, valueGroups } = this.state;
        const maskStyle = {
            display: this.state.isPickerShow ? 'block' : 'none'
        };
        const pickerModalClass = `picker-modal${this.state.isPickerShow ? ' picker-modal-toggle' : ''}`;
        return(
            <div>
                <input 
                    type="text"
                    className="input-box"
                    value={valueGroups.sign}
                    readOnly
                    onClick={this.togglePicker}
                />
                <div className="picker-modal-container">
                    <div className="picker-modal-mask" style={maskStyle} onClick={this.togglePicker}></div>
                    
                        <Picker
                            optionGroups={optionGroups}
                            valueGroups={valueGroups}
                            onChange={this.handleChange}
                        />
                  
                </div>
                
            </div>
        )
    }
}
