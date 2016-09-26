import {
  SET_VALUE,
} from '../actions/myActions';

export const DEFAULT_STATE = {
  value: 'test',
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        value: action.value,
      };

    default:
      return state;
  }
};
