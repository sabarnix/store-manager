/**
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Form from 'containers/Form';
import Table from 'containers/Table';
import Filters from 'containers/Filters';
import { useInjectReducer } from 'utils/injectReducer';
import { add as addAction } from 'containers/Table/actions';
import makeSelectHomePage from './selectors';
import reducer from './reducer';

export function HomePage({ add }) {
  useInjectReducer({ key: 'homePage', reducer });

  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="manage store" />
      </Helmet>
      <Form onSubmit={add} />
      <Filters />
      <Table />
    </div>
  );
}

HomePage.propTypes = {
  add: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

const mapDispatchToProps = {
  add: addAction,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
