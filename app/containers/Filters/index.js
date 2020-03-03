/**
 *
 * Filters
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { areas, categories } from 'containers/HomePage/constants';
import FormRow from 'containers/Form/FormRow';
import FormRowItem from 'containers/Form/FormRowItem';
import Select from 'components/Select';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectFilters from './selectors';
import reducer from './reducer';
import * as Actions from './actions';

export function Filters({ filters, updateField }) {
  useInjectReducer({ key: 'filters', reducer });

  const handleAreaChange = e => updateField('area', e.target.value);
  const handleCategoryChange = e => updateField('category', e.target.value);
  const handleStatusChange = e => updateField('status', e.target.value);

  return (
    <FormRow center full>
      <FormRowItem>
        <label>Area</label>
        <Select
          onChange={handleAreaChange}
          placeholder="All"
          options={areas}
          value={filters.area}
        />
      </FormRowItem>
      <FormRowItem>
        <label>Category</label>
        <Select
          onChange={handleCategoryChange}
          placeholder="All"
          options={categories}
          value={filters.category}
        />
      </FormRowItem>
      <FormRowItem>
        <label>Status</label>
        <Select
          placeholder="All"
          onChange={handleStatusChange}
          options={['Open', 'Close']}
          value={filters.status}
        />
      </FormRowItem>
    </FormRow>
  );
}

Filters.propTypes = {
  filters: PropTypes.object,
  updateField: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  filters: makeSelectFilters(),
});

const mapDispatchToProps = Actions;

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Filters);
