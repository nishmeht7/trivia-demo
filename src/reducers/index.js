import {combineReducers} from 'redux';

import userAnswers from './userAnswersReducer';
import current from './currentReducer';
import questions from './questionsReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({
  routing: routerReducer,
  questions,
  current,
  userAnswers,
  ajaxCallsInProgress
});

export default rootReducer;
