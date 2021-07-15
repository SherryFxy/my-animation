import React from 'react';
import { CSSTransition } from 'react-transition-group'
import './App.css';

class FadeInOut extends React.PureComponent {
  state = {show: true}
  onToggle = () => this.setState({ show: !this.state.show })
  render() {
    const {show} = this.state;
    return (
      <div className="container">
        <div className="square-wrapper">
          <CSSTransition
            in={show}
            timeout={500}
            classNames={'fade'}
            unmountOnExit={true}
          >
            <div className="square" />
          </CSSTransition>
        </div>
        <button onClick={this.onToggle}>toggle</button>
      </div>
    )
  }
}

export default FadeInOut;
