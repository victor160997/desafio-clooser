import { combineReducers } from 'redux';
import workerReducer from './workerReducer';

const rootReducer = combineReducers({
  workerData: workerReducer,
});

export default rootReducer;