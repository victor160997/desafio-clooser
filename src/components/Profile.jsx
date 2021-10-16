import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/Profile.css';
import { renderComponentsProfile } from './Functions';

class Profile extends Component {
  /* constructor(props) {
    super(props);
  } */

  render() {
    const { worker } = this.props;
    return (
      <div>
        { worker ? renderComponentsProfile(worker) : <span>Loading...</span> }
      </div>
    )
  }
}

const mapStateToProps = ({ workerData: { worker }}) => ({
  worker,
});

export default connect(mapStateToProps, null)(Profile);