import * as types from '../actions/actionTypes';

const initialState = {
  number1: '',
  number2: '',
  result: []
};

export default function simpleMath(state = initialState, action = {}) {
  console.log('reducer got called');
    switch (action.type) {
      case types.NUMBER1_CHANGE:
        return {
          ...state,
          number1: action.payload
        };
      case types.NUMBER2_CHANGE:
        return {
          ...state,
          number2: action.payload
        };
      case types.CALCULATE_ALL:
        return {
          ...state,
          result: [parseInt(state.number1, 10) + parseInt(state.number2, 10),
                  parseInt(state.number1, 10) - parseInt(state.number2, 10),
                  parseInt(state.number1, 10) * parseInt(state.number2, 10),
                  parseInt(state.number1, 10) / parseInt(state.number2, 10)]
        };
      default:
        return state;
    }
}
