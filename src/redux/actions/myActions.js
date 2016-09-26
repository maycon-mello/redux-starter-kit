/*
 * @flow
 *
 */
import { Action, Dispatch, GetState, ThunkAction } from './types';

export const SET_VALUE = 'SET_VALUE';

/**
 * Set value
 *
 * @param {string} value
 * @return {Action} action
 */
export function setValue(value: String): Action {
  return {
    type: SET_VALUE,
    value,
  };
}

/**
 * Fetch value from the server with async functions
 *
 * @return {ThunkAction} tunk to be executed
 */
export function fetchValue(): ThunkAction {
  return async function (dispatch: Dispatch, getState: GetState) {
    // Parse the code
    // let { value } = await Server.fetch('/value');
    let value = '2';

    dispatch(setValue(value));
  };
}
