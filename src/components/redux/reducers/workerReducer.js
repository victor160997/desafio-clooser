import { actions } from "../actions";


const INITIAL_STATE = {
  worker: '',
}

function workerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.REQUEST_INFO_WORKER:
      return {...state, worker: action.payload };
    default:
      return state;  
  }
}

export default workerReducer;