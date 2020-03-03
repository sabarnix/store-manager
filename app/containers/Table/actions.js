/*
 *
 * Table actions
 *
 */

import { ADD } from './constants';

export function add(item) {
  return {
    type: ADD,
    item,
  };
}
