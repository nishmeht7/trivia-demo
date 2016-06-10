import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function questionsReducer(state = initialState.questions, action) {
  switch (action.type) {
    default:
      return state;
  }
}
