/*
 *
 * Form actions
 *
 */

import { UPDATE_FIELD, RESET } from './constants';

export function updateField(field, value) {
  return {
    type: UPDATE_FIELD,
    field,
    value,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}
