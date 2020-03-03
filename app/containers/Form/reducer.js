/*
 *
 * Form reducer
 *
 */
import produce from 'immer';
import { UPDATE_FIELD, RESET } from './constants';

export const initialState = {
  shopName: '',
  area: '',
  category: '',
  openingTime: ':',
  closingTime: ':',
};

/* eslint-disable default-case, no-param-reassign */
const formReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_FIELD:
        draft[action.field] = action.value;
        break;
      case RESET:
        Object.keys(initialState).forEach(key => {
          draft[key] = initialState[key];
        });
        break;
    }
  });

export default formReducer;
