import React from 'react';
import QuestionList from './QuestionList';

const TriviaPage = () => {
  return (
    <div>
      <div className="page-header">
        <h2>Try answer this 5 questions</h2>
      </div>
      <QuestionList />
    </div>
  );
};

export default TriviaPage;
