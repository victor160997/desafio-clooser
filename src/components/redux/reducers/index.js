import { combineReducers } from 'redux';
import addWorkReducer from './addWorkReducer';
import workerReducer from './workerReducer';

const rootReducer = combineReducers({
  workerData: workerReducer,
  schedule: addWorkReducer, 
});

export default rootReducer;