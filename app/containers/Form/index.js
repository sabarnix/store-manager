/**
 *
 * Form
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import { areas, categories } from 'containers/HomePage/constants';
import Input from 'components/Input';
import Button from 'components/Button';
import TimeInput from 'components/TimeInput';
import Select from 'components/Select';
import FormRow from './FormRow';
import FormRowItem from './FormRowItem';
import makeSelectForm from './selectors';
import * as Actions from './actions';
import reducer from './reducer';

export function Form({ updateField, form, reset, onSubmit }) {
  useInjectReducer({ key: 'form', reducer });

  const handleNameChange = e => updateField('shopName', e.target.value);
  const handleAreaChange = e => updateField('area', e.target.value);
  const handleCategoryChange = e => updateField('category', e.target.value);
  const handleOpeningTimeChange = v => updateField('openingTime', v);
  const handleClosingTimeChange = v => updateField('closingTime', v);

  const handleFormSubmit = () => {
    onSubmit(form);
    reset();
  };

  return (
    <React.Fragment>
      <FormRow center full>
        <FormRowItem>
          <label>Shop Name</label>
          <Input
            onChange={handleNameChange}
            placeholder="Shop Name"
            value={form.shopName}
          />
        </FormRowItem>
        <FormRowItem>
          <label>Area</label>
          <Select
            onChange={handleAreaChange}
            options={areas}
            value={form.area}
          />
        </FormRowItem>
        <FormRowItem>
          <label>Category</label>
          <Select
            onChange={handleCategoryChange}
            options={categories}
            value={form.category}
          />
        </FormRowItem>
        <FormRowItem>
          <label>Opening Time</label>
          <TimeInput
            onChange={handleOpeningTimeChange}
            value={form.openingTime}
          />
        </FormRowItem>
        <FormRowItem>
          <label>Closing Time</label>
          <TimeInput
            onChange={handleClosingTimeChange}
            value={form.closingTime}
          />
        </FormRowItem>
      </FormRow>
      <Button
        disabled={
          !form.shopName ||
          !form.area ||
          !form.category ||
          !form.closingTime ||
          !form.openingTime
        }
        onClick={handleFormSubmit}
      >
        Submit
      </Button>
    </React.Fragment>
  );
}

Form.propTypes = {
  updateField: PropTypes.func.isRequired,
  form: PropTypes.object,
  reset: PropTypes.func,
  onSubmit: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  form: makeSelectForm(),
});

const mapDispatchToProps = Actions;

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Form);
