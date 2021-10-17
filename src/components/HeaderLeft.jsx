import React, { Component } from 'react'
import { renderData, renderTime, returnMounth } from './Functions';
import './css/HeaderLeft.css';

export default class HeaderLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: '',
      mounth: '',
      year: '',
      clock: '',
    };
  }

  componentDidMount() {
    setInterval(() => this.setDate(renderData()), 1000);
  }

  setDate({ day, mounth, year }) {
    const mounthExtense = returnMounth(mounth)
    this.setState({
      day,
      mounth: mounthExtense,
      year,
      clock: renderTime(),
    });
  }

  render() {
    const { day, mounth, year, clock } = this.state;
    return (
      <div className="body-HeaderLeft">
        { day && mounth && year && clock ?
        <span>{`Hoje - ${day} de ${mounth} de ${year} - ${clock}`}</span> :
        <img src="https://i.gifer.com/ZZ5H.gif" alt="loading" width="50px"/> }
      </div>
    )
  }
}
