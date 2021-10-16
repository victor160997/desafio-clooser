import React, { Component } from 'react';
import './css/HeaderSchedule.css';

export default class HeaderSchedule extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className="body-HeaderSchedule">
        { name && <h1>Bem-vindo(a), { name }</h1> }
        <span>Adicione seus jobs a agenda e gerencie sua rotina</span>
      </div>
    )
  }
}
