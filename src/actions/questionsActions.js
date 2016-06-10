import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
import QuestionsApi from '../api/QuestionsApi';
import * as _ from 'lodash';

export function loadQuestionsSuccess(questions) {
  return {type: types.LOAD_QUESTIONS_SUCCESS, questions};
}

export function nextQuestion(questions) {
  return {type: types.NEXT_QUESTION, questions};
}

export function userAnswered(answer) {
  return {type: types.USER_ANSWERED, answer};
}

export function loadCorrectAnswerSuccess(correctAnswer) {
  return {type: types.LOAD_CORRECT_ANSWER_SUCCESS, correctAnswer};
}

export function loadQuestions() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return QuestionsApi.getAllQuestions().then(questions => {
      let five_questions = _.sampleSize(questions,5);
      dispatch(loadQuestionsSuccess(five_questions));
    }).catch(error => {
      throw(error);
    });
  };
}

export function userAnswer(questionAnswer) {
  return dispatch => {
    dispatch(userAnswered(questionAnswer.answer));
    return QuestionsApi.getAnswer(questionAnswer.question).then(answer => {
      dispatch(loadCorrectAnswerSuccess(answer));
    }).catch(error => {
      throw(error);
    });
  };
}

export function getNextQuestion() {
  return (dispatch, getState) => {
    dispatch(nextQuestion(getState().questions));
  }
}
