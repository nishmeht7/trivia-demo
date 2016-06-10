import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function questionsReducer(state = initialState.current, action) {
  switch (action.type) {
    case types.LOAD_QUESTIONS_SUCCESS:
      return Object.assign({}, state, {uid: action.questions[0].uid, index: 0});
    case types.USER_ANSWERED:
      return Object.assign({}, state, {userAnswer: action.answer});
    case types.LOAD_CORRECT_ANSWER_SUCCESS:
      return Object.assign({}, state, {correctAnswer: action.correctAnswer});
    case types.NEXT_QUESTION:
      const newIndex = state.index + 1;
      const newUID = action.questions[newIndex].uid;
      return Object.assign({}, initialState.current, {uid: newUID, index: newIndex});
    default:
      return state;
  }
}
