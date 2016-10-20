import * as types from './actionTypes';

export function updateNumber1(number1) {
  return {
    type: types.NUMBER1_CHANGE,
    payload: number1
  };
}

export function updateNumber2(number2) {
  return {
    type: types.NUMBER2_CHANGE,
    payload: number2
  };
}

export function calculateAll() {
  return {
    type: types.CALCULATE_ALL
  };
}
