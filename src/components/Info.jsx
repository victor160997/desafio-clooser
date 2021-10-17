import React, { Component } from 'react'
import Profile from './Profile'
import './css/Info.css';
import HeaderLeft from './HeaderLeft';

export default class Info extends Component {
  render() {
    return (
      <div className="body-info">
        <HeaderLeft />
        <Profile />
      </div>
    )
  }
}
