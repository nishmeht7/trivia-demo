import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function questionsReducer(state = initialState.userAnswers, action) {
  switch (action.type) {
    case types.LOAD_QUESTIONS_SUCCESS:
      return initialState.userAnswers;
    case types.USER_ANSWERED_CORRECTLY:
      return Object.assign({}, state, {correct: state.correct + 1});
    case types.USER_ANSWERED_INCORRECTLY:
      return Object.assign({}, state, {wrong: state.wrong + 1});
    default:
      return state;
  }
}
