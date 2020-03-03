import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the filters state domain
 */

const selectFiltersDomain = state => state.filters || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Filters
 */

const makeSelectFilters = () =>
  createSelector(
    selectFiltersDomain,
    substate => substate,
  );

export default makeSelectFilters;
export { selectFiltersDomain };
