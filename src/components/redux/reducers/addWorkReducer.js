import { actions } from "../actions";


const INITIAL_STATE = {
  schedule: '',
}

function addWorkReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.ADD_WORK:
      return {...state, schedule: [...state.schedule, action.payload] };
    default:
      return state;
  }
}

export default addWorkReducer;