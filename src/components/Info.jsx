import React, { Component } from 'react'
import Profile from './Profile'
import './css/Info.css';

export default class Info extends Component {
  render() {
    return (
      <div className="body-info">
        <Profile />
      </div>
    )
  }
}
