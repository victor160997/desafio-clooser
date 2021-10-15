import React, { Component } from 'react'
import getWorkerInfo from '../services/FetchWorker';

export default class HomePage extends Component {
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
    const info = await getWorkerInfo();
    this.setState({ worker: info });
  }

  render() {
    return (
      <div>
        hei
      </div>
    )
  }
}
