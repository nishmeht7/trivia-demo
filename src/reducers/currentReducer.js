import * as types from '../actions/actionTypes';
import initialState from './initialState';
import * as _ from 'lodash';

export default function questionsReducer(state = initialState.current, action) {
  switch (action.type) {
    case types.LOAD_QUESTIONS_SUCCESS:
      return Object.assign({}, state, {uid: action.questions[0].uid});
    case types.USER_ANSWERED:
      return Object.assign({}, state, {userAnswer: action.answer});
    case types.LOAD_CORRECT_ANSWER_SUCCESS:
      return Object.assign({}, state, {correctAnswer: action.correctAnswer});
    case types.NEXT_QUESTION:
      const currentIndex = action.questions.reduce((prev, curr, index, arr) => {
        if(curr.uid === state.uid) {
          return prev + index+1;
        } else {
          return prev;
        }
      },-1);
      return Object.assign({}, initialState.current, {uid: action.questions[currentIndex+1].uid});
    default:
      return state;
  }
}
