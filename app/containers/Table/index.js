/**
 *
 * Table
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import { selectTableData } from './selectors';
import reducer from './reducer';
import StyledTable from './StyledTable';

export function Table({ data }) {
  useInjectReducer({ key: 'table', reducer });

  if (!data.length) {
    return null;
  }

  return (
    <StyledTable className="table table-hover table-mc-light-blu">
      <thead>
        <tr>
          <th>Shop Name</th>
          <th>Shop Area</th>
          <th>Shop Category</th>
          <th>Shop Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ shopName, area, category, status }) => (
          <tr>
            <td>{shopName}</td>
            <td>{area}</td>
            <td>{category}</td>
            <td>{status}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
}

Table.propTypes = {
  data: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  data: selectTableData(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Table);
