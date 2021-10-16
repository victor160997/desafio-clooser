import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/Schedule.css';
import { renderIcons, renderWorks } from './Functions';

class Schedule extends Component {
  render() {
    const { schedule } = this.props
    return (
      <div className="body-schedule">
        { renderIcons() }
        { renderWorks(schedule) }
      </div>
    )
  }
}

const mapStateToProps = ({ schedule: { schedule }}) => ({
  schedule,
});

export default connect(mapStateToProps, null)(Schedule);
