import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addWorkAction } from './redux/actions';
import './css/FormToSchedule.css';
import { checkCoincidence, checkInputs, renderData } from './Functions';

class FormToSchedule extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      date: '',
      hour: '',
      minute: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit({ date, hour, minute }) {
    const { addWork, schedule } = this.props;
    const { year } = renderData();
    if (checkInputs({ date, hour, minute }) === false) {
      return global.alert('Data, hora ou minuto com valor inválido!');
    }
    if (schedule !== '' && schedule.length > 0) {
      const coincidence = checkCoincidence({ date, hour, minute }, schedule);
      if (coincidence === true) {
        return global.alert('Você já tem um job marcado nessa data e horário');
      }
    }
    if (year !== Number(date.split('-')[0])) {
      return global.alert('A agenda só aceita jobs no ano corrente!');
    }

    const hr = hour > 9 ? hour : `0${hour}`;
    const min = minute > 9 ? minute : `0${minute}`;

    addWork({ date, hour: hr, minute: min });

    return this.setState({
      date: '',
      hour: '',
      minute: '',
    });
  }

  render() {
    const { date, hour, minute } = this.state;
    return (
      <form className="body-form-schedule">
        <label htmlFor="date">
          <input
            className="input-date"
            type="date"
            name="date"
            onChange={ (e) => this.handleChange(e) }
            placeholder="Selecione uma data..."
            value={ date }
          />  
        </label>
        <label htmlFor="hour">
          <input
            className="input-hour"
            type="number"
            name="hour"
            onChange={ (e) => this.handleChange(e) }
            placeholder="Hora"
            max="23"
            min="1"
            value={ hour }
          />  
        </label>
        <label htmlFor="minute">
          <input
            className="input-minute"
            type="number"
            name="minute"
            onChange={ (e) => this.handleChange(e) }
            placeholder="Minuto"
            max="59"
            min="1"
            value={ minute }
          />  
        </label>
        <svg 
          width="180"
          height="32"
          viewBox="0 0 180 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick = { () => this.handleSubmit({ date, hour, minute }) }
        >
          <rect width="180" height="32" rx="6" fill="#4A0D77"/>
          <path d="M88.6268 18.662H83.7548L82.7468 21H80.9268L85.4348 11.032H86.9048L91.4268 21H89.6208L88.6268 18.662ZM88.0248 17.262L86.1908 12.992L84.3568 17.262H88.0248ZM99.2108 13.93V20.776C99.2108 21.8773 98.9074 22.7127 98.3008 23.282C97.6941 23.8513 96.8028 24.136 95.6268 24.136C94.5348 24.136 93.5734 23.9073 92.7428 23.45L93.0228 22.12C93.8814 22.568 94.7354 22.792 95.5848 22.792C96.8448 22.792 97.4748 22.1667 97.4748 20.916V19.516C97.2601 19.8987 96.9474 20.2113 96.5368 20.454C96.1261 20.6873 95.6641 20.804 95.1508 20.804C94.5348 20.804 93.9841 20.6593 93.4988 20.37C93.0228 20.0713 92.6494 19.656 92.3788 19.124C92.1174 18.5827 91.9868 17.9667 91.9868 17.276C91.9868 16.5853 92.1174 15.974 92.3788 15.442C92.6494 14.9007 93.0228 14.4853 93.4988 14.196C93.9841 13.8973 94.5348 13.748 95.1508 13.748C95.6734 13.748 96.1354 13.86 96.5368 14.084C96.9474 14.2987 97.2601 14.602 97.4748 14.994V13.93H99.2108ZM95.6128 19.432C96.1914 19.432 96.6441 19.2407 96.9708 18.858C97.3068 18.4753 97.4748 17.948 97.4748 17.276C97.4748 16.604 97.3114 16.0767 96.9848 15.694C96.6581 15.3113 96.2008 15.12 95.6128 15.12C95.0341 15.12 94.5768 15.3113 94.2408 15.694C93.9141 16.0767 93.7508 16.604 93.7508 17.276C93.7508 17.948 93.9141 18.4753 94.2408 18.858C94.5768 19.2407 95.0341 19.432 95.6128 19.432ZM107.289 17.556H102.417C102.455 18.312 102.641 18.872 102.977 19.236C103.323 19.5907 103.831 19.768 104.503 19.768C105.278 19.768 105.997 19.516 106.659 19.012L107.163 20.216C106.827 20.4867 106.412 20.706 105.917 20.874C105.432 21.0327 104.937 21.112 104.433 21.112C103.276 21.112 102.366 20.7853 101.703 20.132C101.041 19.4787 100.709 18.5827 100.709 17.444C100.709 16.7253 100.854 16.086 101.143 15.526C101.433 14.966 101.839 14.532 102.361 14.224C102.884 13.9067 103.477 13.748 104.139 13.748C105.11 13.748 105.875 14.0653 106.435 14.7C107.005 15.3253 107.289 16.1887 107.289 17.29V17.556ZM104.181 15.008C103.715 15.008 103.332 15.148 103.033 15.428C102.744 15.6987 102.557 16.0953 102.473 16.618H105.763C105.707 16.086 105.544 15.6847 105.273 15.414C105.012 15.1433 104.648 15.008 104.181 15.008ZM112.817 13.748C114.507 13.748 115.351 14.7187 115.351 16.66V21H113.601V16.744C113.601 16.184 113.494 15.778 113.279 15.526C113.065 15.2647 112.733 15.134 112.285 15.134C111.753 15.134 111.324 15.3067 110.997 15.652C110.671 15.988 110.507 16.436 110.507 16.996V21H108.771V15.932C108.771 15.1853 108.734 14.518 108.659 13.93H110.297L110.423 15.092C110.666 14.6627 110.993 14.3313 111.403 14.098C111.823 13.8647 112.295 13.748 112.817 13.748ZM123.969 10.696V21H122.247V19.866C122.032 20.258 121.724 20.566 121.323 20.79C120.922 21.0047 120.464 21.112 119.951 21.112C119.344 21.112 118.803 20.958 118.327 20.65C117.851 20.342 117.478 19.908 117.207 19.348C116.946 18.7787 116.815 18.13 116.815 17.402C116.815 16.674 116.946 16.0347 117.207 15.484C117.468 14.9333 117.837 14.5087 118.313 14.21C118.789 13.902 119.335 13.748 119.951 13.748C120.455 13.748 120.903 13.8553 121.295 14.07C121.696 14.2753 122.004 14.5693 122.219 14.952V10.696H123.969ZM120.413 19.74C120.992 19.74 121.44 19.5393 121.757 19.138C122.084 18.7367 122.247 18.1673 122.247 17.43C122.247 16.6927 122.088 16.1233 121.771 15.722C121.454 15.3207 121.006 15.12 120.427 15.12C119.839 15.12 119.382 15.3207 119.055 15.722C118.738 16.114 118.579 16.674 118.579 17.402C118.579 18.1393 118.738 18.7133 119.055 19.124C119.382 19.5347 119.834 19.74 120.413 19.74ZM132.637 13.93V21H130.915V19.866C130.7 20.258 130.392 20.566 129.991 20.79C129.59 21.0047 129.132 21.112 128.619 21.112C128.003 21.112 127.457 20.9627 126.981 20.664C126.505 20.3653 126.136 19.9407 125.875 19.39C125.614 18.8393 125.483 18.2 125.483 17.472C125.483 16.744 125.614 16.1 125.875 15.54C126.146 14.9707 126.519 14.532 126.995 14.224C127.471 13.9067 128.012 13.748 128.619 13.748C129.132 13.748 129.59 13.86 129.991 14.084C130.392 14.2987 130.7 14.602 130.915 14.994V13.93H132.637ZM129.095 19.74C129.674 19.74 130.122 19.5393 130.439 19.138C130.756 18.7367 130.915 18.172 130.915 17.444C130.915 16.6973 130.756 16.1233 130.439 15.722C130.122 15.3207 129.669 15.12 129.081 15.12C128.502 15.12 128.05 15.33 127.723 15.75C127.406 16.1607 127.247 16.7347 127.247 17.472C127.247 18.2 127.406 18.76 127.723 19.152C128.05 19.544 128.507 19.74 129.095 19.74ZM138.351 13.762C138.621 13.762 138.855 13.7993 139.051 13.874L139.037 15.47C138.738 15.3487 138.43 15.288 138.113 15.288C137.515 15.288 137.058 15.4607 136.741 15.806C136.433 16.1513 136.279 16.6087 136.279 17.178V21H134.543V15.932C134.543 15.1853 134.505 14.518 134.431 13.93H136.069L136.209 15.176C136.386 14.7187 136.666 14.3687 137.049 14.126C137.431 13.8833 137.865 13.762 138.351 13.762Z" fill="white"/>
          <line x1="51.5" y1="4" x2="51.5" y2="28" stroke="white"/>
          <path d="M32.25 10H21.75C20.9216 10 20.25 10.6716 20.25 11.5V22C20.25 22.8284 20.9216 23.5 21.75 23.5H32.25C33.0784 23.5 33.75 22.8284 33.75 22V11.5C33.75 10.6716 33.0784 10 32.25 10Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M30 8.5V11.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M24 8.5V11.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M20.25 14.5H33.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addWork: (payload) => dispatch(addWorkAction(payload)),
});

const mapStateToProps = ({ schedule: { schedule }}) => ({
  schedule,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormToSchedule);
