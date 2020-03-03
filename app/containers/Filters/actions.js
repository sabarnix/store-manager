/*
 *
 * Filters actions
 *
 */

import { UPDATE_FIELD } from './constants';

export function updateField(field, value) {
  return {
    type: UPDATE_FIELD,
    field,
    value,
  };
}
