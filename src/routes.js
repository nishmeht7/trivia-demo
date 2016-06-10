import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Layout from './components/Layout';
import TriviaPage from './components/trivia/TriviaPage';

export default (
    <Route path="/" component={Layout}>
      <IndexRoute component={TriviaPage}/>
    </Route>
  );
