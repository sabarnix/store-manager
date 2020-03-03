import { createSelector } from 'reselect';
import makeSelectFilters from 'containers/Filters/selectors';
import { initialState } from './reducer';

/**
 * Direct selector to the table state domain
 */

const selectTableDomain = state => state.table || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Table
 */

const makeSelectTable = () =>
  createSelector(
    selectTableDomain,
    substate => substate,
  );

const selectTableDataRaw = () =>
  createSelector(
    makeSelectTable(),
    table => table.list || [],
  );

const compare = (openingTime, closingTime, hour, minutes) => {
  const [openingHour, openingMin] = openingTime
    .split(':')
    .map(v => (v ? parseInt(v, 10) : ''));
  const [closingHour, closingMin] = closingTime
    .split(':')
    .map(v => (v ? parseInt(v, 10) : ''));

  if (hour > openingHour && hour < closingHour) {
    return true;
  }

  if (hour === openingHour && minutes >= openingMin) {
    return true;
  }

  if (hour === closingHour && minutes <= closingMin) {
    return true;
  }

  return false;
};

const selectTableDataWithoutFilter = () =>
  createSelector(
    selectTableDataRaw(),
    data => {
      const date = new Date();
      const hour = date.getHours();
      const minutes = date.getMinutes();
      return data.map(d => ({
        ...d,
        status: compare(d.openingTime, d.closingTime, hour, minutes)
          ? 'Open'
          : 'Close',
      }));
    },
  );

const selectTableData = () =>
  createSelector(
    selectTableDataWithoutFilter(),
    makeSelectFilters(),
    (data, filter) =>
      data.filter(
        d =>
          (!filter.status || filter.status === d.status) &&
          (!filter.area || filter.area === d.area) &&
          (!filter.category || filter.category === d.category),
      ),
  );

export default makeSelectTable;
export { selectTableDomain, selectTableData };
