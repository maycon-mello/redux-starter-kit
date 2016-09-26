import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import values from './values';

const rootReducer = combineReducers({
  values,
  routing,
});

export default rootReducer;
