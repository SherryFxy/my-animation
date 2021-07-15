import React from 'react';
// import SwitchAnimation from './SwitchAnimation';
// import FadeInOut from './FadeInOut';
import GroupAnimation from './GroupAnimation';
import './App.css';

export default class App extends React.PureComponent{
  render(){
    return (
      <>
        <GroupAnimation />
        {/* <SwitchAnimation /> */}
        {/* <FadeInOut /> */}
      </>
    )
  }
};
