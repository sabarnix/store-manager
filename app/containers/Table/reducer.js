/*
 *
 * Table reducer
 *
 */
import produce from 'immer';
import { ADD } from './constants';

export const initialState = {
  list: [],
};

/* eslint-disable default-case, no-param-reassign */
const tableReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD:
        draft.list.push(action.item);
        break;
    }
  });

export default tableReducer;
