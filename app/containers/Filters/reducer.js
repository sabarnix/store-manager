/*
 *
 * Filters reducer
 *
 */
import produce from 'immer';
import { UPDATE_FIELD } from './constants';

export const initialState = {
  area: '',
  category: '',
  status: '',
};

/* eslint-disable default-case, no-param-reassign */
const filtersReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_FIELD:
        draft[action.field] = action.value;
        break;
    }
  });

export default filtersReducer;
