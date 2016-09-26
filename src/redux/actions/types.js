
export type Action =
    { type: 'SET_VALUE', value: String }
  | { type: 'SET_VALUE_ASYNC', value: String }
;

export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;
