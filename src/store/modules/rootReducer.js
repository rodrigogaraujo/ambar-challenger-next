import { combineReducers } from 'redux';

import temperature from './temperature/reducer';
import initial from './initialData/reducer';

export default combineReducers({
  temperature,
  initial,
});
