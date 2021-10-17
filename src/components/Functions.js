import React from 'react';

function calculateTime(date) {
  const data = new Date();
  const dataInit = `${date}T00:00:00-03:00`;
  const init = new Date(dataInit);
  const tempCloseer = (data - init)/1000/60/60/24/365;
  const num = tempCloseer - parseInt(tempCloseer);
  return (num + parseInt(num * 10) / 10).toFixed(1);
}

export function renderComponentsProfile(worker) {
  const timeInCloseerArray = worker.created_at.split('');
  let timeInCloseer = [];
  timeInCloseerArray.map((c, i) => i < 10 && timeInCloseer.push(c));
  return (
    <div className="body-profile">
      <div className="image-name-role">
        <img src={ worker.picture } alt={`foto de ${worker.first_name}`} />
        <span className="profile-name">
          {`${worker.first_name} ${worker.last_name} `} 
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.3106 0.098173C5.38577 0.123693 5.45921 0.154046 5.53043 0.18904L6.38743 0.610073C6.61999 0.72434 6.89256 0.72434 7.12512 0.610073L7.98212 0.18904C8.89237 -0.2582 9.99369 0.11564 10.4418 1.02403L10.4909 1.13225L10.5329 1.24341L10.8405 2.14581C10.9241 2.39072 11.1168 2.58305 11.3622 2.66637L12.2665 2.97334C13.2271 3.29942 13.7409 4.34085 13.4142 5.29942C13.3886 5.37443 13.3582 5.44772 13.3231 5.51879L12.9011 6.37399C12.7866 6.60605 12.7866 6.87805 12.9011 7.11012L13.3231 7.96532C13.7713 8.87365 13.3967 9.97265 12.4863 10.4199C12.4151 10.4549 12.3417 10.4853 12.2665 10.5107L11.3622 10.8177C11.1168 10.9011 10.9241 11.0934 10.8405 11.3383L10.5329 12.2407C10.2061 13.1993 9.16254 13.712 8.20192 13.3859C8.12676 13.3604 8.05334 13.3301 7.98212 13.2951L7.12512 12.874C6.89256 12.7597 6.61999 12.7597 6.38743 12.874L5.53043 13.2951C4.62013 13.7423 3.51885 13.3685 3.07067 12.4601C3.0356 12.389 3.00518 12.3157 2.97961 12.2407L2.67199 11.3383C2.5885 11.0934 2.39576 10.9011 2.15033 10.8177L1.24603 10.5107C0.285427 10.1847 -0.228388 9.14325 0.0983801 8.18465C0.123954 8.10965 0.154371 8.03639 0.189439 7.96532L0.61136 7.11012C0.725868 6.87805 0.725868 6.60605 0.61136 6.37399L0.189439 5.51879C-0.258745 4.61041 0.115884 3.51145 1.02619 3.06421C1.09742 3.02921 1.17086 2.99885 1.24603 2.97334L2.15033 2.66637C2.39576 2.58305 2.5885 2.39072 2.67199 2.14581L2.97961 1.24341C3.30638 0.284827 4.35 -0.227907 5.3106 0.098173ZM9.07429 4.72183L5.4538 8.33465L4.13486 6.75532C3.9577 6.54312 3.64176 6.51445 3.42917 6.69125C3.21658 6.86805 3.18786 7.18332 3.36502 7.39545L5.0352 9.39545C5.22382 9.62132 5.5661 9.63685 5.77441 9.42892L9.78285 5.42892C9.97853 5.23367 9.97853 4.91709 9.78285 4.72183C9.58717 4.52657 9.26997 4.52657 9.07429 4.72183Z" fill="#02E2BD"/>
          </svg>
        </span>
        <span className="profile-role">{ worker.role }</span>
      </div>
      <div className="physical-profile">
        <span>{`Altura: ${worker.height}`}</span>
        <span>{`Manequim: ${worker.size}`}</span>
        <span>{`Calçado: ${worker.shoe}`}</span>
      </div>
      <div className="time-closeer">
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.56251 0C11.7393 0 15.125 3.17192 15.125 7.08333C15.125 10.9948 11.7393 14.1667 7.56251 14.1667C3.38574 14.1667 0 10.9948 0 7.08333C0 3.17192 3.38574 0 7.56251 0ZM7.56251 1.18079C4.08754 1.18079 1.26067 3.82854 1.26067 7.08333C1.26067 10.3381 4.08754 12.9859 7.56251 12.9859C11.0375 12.9859 13.8643 10.3381 13.8643 7.08333C13.8643 3.82854 11.0375 1.18079 7.56251 1.18079ZM6.99532 2.83333C7.28232 2.83333 7.51978 3.03332 7.55729 3.29252L7.56251 3.36458V7.08333H10.0203C10.3334 7.08333 10.5875 7.32133 10.5875 7.61458C10.5875 7.8834 10.374 8.10581 10.0972 8.14095L10.0203 8.14583H6.99532C6.70832 8.14583 6.47086 7.94587 6.43335 7.68662L6.42813 7.61458V3.36458C6.42813 3.07133 6.68223 2.83333 6.99532 2.83333Z" fill="white"/>
        </svg>
        <span>{`Tempo na Closeer: ${ calculateTime(timeInCloseer.join('')) } anos`}</span>
      </div>
    </div>
  );
}

function renderBaloon(e) {
  const baloon = document.querySelector('.clear');
  const type = e.target.className.baseVal;
  if (type === 'eli-5') {
    baloon.innerText = 'Próximo do início';
  }
  if (type === 'eli-4') {
    baloon.innerText = 'Já iniciou';
  }
  if (type === 'eli-3') {
    baloon.innerText = 'Para o futuro';
  }
  return baloon.className = 'view';
}

function clearBaloon(e) {
  const baloon = document.querySelector('.view');
  baloon.className = 'clear';
}

export function renderIcons() {
  return (
    <div>
      <div>
        <p className="clear"></p>
      </div>
      <div className="icons">
        <svg name="yellow" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="eli-5" onMouseOver={ (e) => renderBaloon(e) } onMouseOut={ (e) => clearBaloon(e) }>
          <circle cx="7" cy="7" r="6.5" fill="#ECC561" stroke="#EFD89E"/>
        </svg>
        <svg name="red" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="eli-4" onMouseOver={ (e) => renderBaloon(e) } onMouseOut={ (e) => clearBaloon(e) }>
          <circle cx="7" cy="7" r="6.5" fill="#EB5F5F" stroke="#FD7E7E"/>
        </svg>
        <svg name="green "width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="eli-3" onMouseOver={ (e) => renderBaloon(e) } onMouseOut={ (e) => clearBaloon(e) }>
          <circle cx="7" cy="7" r="6.5" fill="#02E2BD" stroke="#61F4D7"/>
        </svg>
      </div>
    </div>
  );
}

export function renderData() {
  const moment = new Date();
  return {
    day: moment.getDate(),
    mounth: moment.getMonth() + 1,
    year: moment.getFullYear(),
  };
}

export function returnMounth(n) {
  if(n === 1) {
    return 'Janeiro';
  } else if (n === 2) {
    return 'Fevereiro';
  } else if (n === 3) {
    return 'Março';
  } else if (n === 4) {
    return 'Abril';
  } else if (n === 5) {
    return 'Maio';
  } else if (n === 6) {
    return 'Junho';
  } else if (n === 7) {
    return 'Julho';
  } else if (n === 8) {
    return 'Agosto';
  } else if (n === 9) {
    return 'Setembro';
  } else if (n === 10) {
    return 'Outubro';
  } else if (n === 11) {
    return 'Novembro';
  } else {
    return 'Dezembro';
  }
}

export function renderTime() {
  const data = new Date();
  const  hr = data.getHours();
  const min = data.getMinutes();
  const sec = data.getSeconds();
  const clock = `${hr}:${min > 9 ? min : `0${min}`}:${sec > 9 ? sec : `0${sec}`}`;
  return clock;
}

function checkIcon(work) {
  const { date, hour, minute } = work;
  const dataJob = `${date}T${hour}:${minute}:00-03:00`;
  const compare = (new Date() - new Date(dataJob))/ 1000 / 60 / 60;
  if (compare >= 0) {
    return (
      <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.2 7C14.2 10.5671 11.1564 13.5 7.35 13.5C3.54358 13.5 0.5 10.5671 0.5 7C0.5 3.43286 3.54358 0.5 7.35 0.5C11.1564 0.5 14.2 3.43286 14.2 7Z" fill="#EB5F5F" stroke="#FD7E7E"/>
      </svg>
    );
  } 
  if (0 > compare && compare > -12) {
    return (
      <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.4239 7C14.4239 10.5602 11.3375 13.5 7.46193 13.5C3.58638 13.5 0.5 10.5602 0.5 7C0.5 3.43977 3.58638 0.5 7.46193 0.5C11.3375 0.5 14.4239 3.43977 14.4239 7Z" fill="#ECC561" stroke="#EFD89E"/>
    </svg>
    );
  } 
  if (compare <= -12) {
    return (
      <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.2 7C14.2 10.5671 11.1564 13.5 7.35 13.5C3.54358 13.5 0.5 10.5671 0.5 7C0.5 3.43286 3.54358 0.5 7.35 0.5C11.1564 0.5 14.2 3.43286 14.2 7Z" fill="#02E2BD" stroke="#61F4D7"/>
      </svg>
    );
  }
}

function renderDayWork(work) {
  const { date, hour, minute } = work;
  const stringMounth = returnMounth(Number(date.split('-')[1])).split('');
  const array = [stringMounth[0], stringMounth[1], stringMounth[2]]
  const mounth = array.join('');
  const day = date.split('-')[2];
  const icon = checkIcon(work);
  console.log(icon);
  return (
    <div className="date-job">
      <span className="icon-date">{ icon }</span>
      <span className="text-date">
        { ` ${day}/${mounth} das ${hour}h${minute} ás ${(Number(hour) + 1) > 9 ? (Number(hour) + 1)
        : `0${(Number(hour) + 1)}`}h${minute}` }
      </span>
    </div>
  );
}

export function renderWorks(schedule) {
  if (schedule !== '' && schedule.length > 0) {
    return (
      <div className="work-dates">
        { schedule.map((work) => {
          return <div>{ renderDayWork(work) }</div>;
        }) }
      </div>
    );
  }
}


export function checkCoincidence(dateJob, arraySchedule) {
  const coincidenceTime = arraySchedule.some((schedule) => schedule.date === dateJob.date
  && (schedule.hour === dateJob.hour));
  return coincidenceTime;
}

export function checkInputs({ date, hour, minute }) {
  if (date === '') {
    return false;
  }
  if (hour === '' || hour < 1 || hour > 23) {
    return false;
  }
  if (minute === '' || minute < 0 || minute > 59) {
    return false;
  }
}
