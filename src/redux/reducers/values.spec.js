import { expect } from 'chai';
import * as actions from '../actions/myActions';
import values, { DEFAULT_STATE } from './values';

describe('Reducers', () => {
  describe('Code', () => {
    it('should handle initial state', () => {
      let state = values(undefined, {});
      expect(state).to.deep.equal(DEFAULT_STATE);
    });

    it('should handle SET_VALUE', () => {
      let value = 'test';
      let state = values(undefined, actions.setValue(value));
      expect(state.value).to.equal(value);
    });
  });
});
