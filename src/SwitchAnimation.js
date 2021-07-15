import React from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import './App.css';

export default class SwitchAnimation extends React.PureComponent {
    constructor (props) {
        super(props);
        this.state = {
            isOn: true
        }
    }
    
    btnClick = () => this.setState({ isOn: !this.state.isOn })
    render() {
        const {isOn} = this.state;
        return (
            <>
            <button onClick={this.btnClick.bind(this)}>{isOn ? "on" : "off"}</button>
            <SwitchTransition mode={"in-out"}>
                <CSSTransition
                    classNames="btn"
                    timeout={500}
                    key={isOn ? "on" : "off"}
                >
                    <div className="change">{isOn ? "on" : "off"}</div>
                </CSSTransition>
            </SwitchTransition>
            </>
        )
    }
}

