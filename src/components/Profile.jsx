import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/Profile.css';
import { renderComponentsProfile } from './Functions';

class Profile extends Component {

  render() {
    const { worker } = this.props;
    return (
      <div>
        { worker ? renderComponentsProfile(worker)
        : <img src="https://i.gifer.com/ZZ5H.gif" alt="loading" width="50px"/> }
      </div>
    )
  }
}

const mapStateToProps = ({ workerData: { worker }}) => ({
  worker,
});

export default connect(mapStateToProps, null)(Profile);