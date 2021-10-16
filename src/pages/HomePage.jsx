import React, { Component } from 'react'
import { connect } from 'react-redux';
import FormToSchedule from '../components/FormToSchedule';
import HeaderSchedule from '../components/HeaderSchedule';
import Info from '../components/Info';
import { getInforWorkerAction } from '../components/redux/actions';
import getWorkerInfo from '../services/FetchWorker';
import './HomePage.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      worker: '',
    }
  }

  componentDidMount() {
    this.requestInfoWorker();
  }

  async requestInfoWorker() {
    const { getInfoWorker } = this.props;
    const info = await getWorkerInfo();
    this.setState({ worker: info });
    getInfoWorker(info);
  }

  render() {
    const { worker } = this.state;
    const { first_name: name } = worker;
    return (
      <div className="body-home-page">
        <Info />
        <HeaderSchedule name={ name } />
        <FormToSchedule />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getInfoWorker: (payload) => dispatch(getInforWorkerAction(payload)),
});

export default connect(null, mapDispatchToProps)(HomePage);

