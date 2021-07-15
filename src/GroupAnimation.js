import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './App.css';

export default class GroupAnimation extends React.PureComponent {
    constructor (props) {
        super(props);
        this.state = {
            friends: []
        }
    }
    
    addFriend(){
        this.setState({
            friends: [...this.state.friends, 'coderwhy']
        })
    }
    removeFriend(){
        const {friends} = this.state;
        this.setState({
            friends: friends.slice(0, friends.length - 1)
        })
    }
    render() {
        const {friends} = this.state;
        return (
            <>
            <button onClick={e => this.addFriend()}>+friend</button>
            <button onClick={e => this.removeFriend()}>-friend</button>
            <TransitionGroup>
                {
                    friends.map((item, index) => {
                        return (
                            <CSSTransition
                                classNames="friend"
                                timeout={300}
                                key={index}
                            >
                                <div className="friend">{item}</div>
                            </CSSTransition>
                        )
                    })
                }
            </TransitionGroup>
            </>
        )
    }
}

