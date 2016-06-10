import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Choice from './Choice';
import QuestionResultMessage from './QuestionResultMessage';
import TriviaResultMessage from './TriviaResultMessage';
import * as questionActions from '../../actions/questionsActions';

class QuestionList extends Component {

  constructor(props, context) {
    super(props, context);
    this.userAnswer = this.userAnswer.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  userAnswer(event) {
    this.props.actions.userAnswer({answer: event.target.value, question: this.props.question.uid});
  }

  showAnswer() {
    return this.props.current.correctAnswer ? '' : 'hide';
  }

  showResult() {
    return this.props.current.correctAnswer && this.props.current.index === 4 ? '' : 'hide';
  }

  nextQuestion() {
    console.log('nextQuestion');
    this.props.actions.getNextQuestion();
  }

  userWon() {
    return this.props.current.userAnswer === this.props.current.correctAnswer;
  }

  getResultLabel(choice) {
    return choice.uid === this.props.current.correctAnswer ? 'Right' : 'Wrong';
  }

  getResultClass(choice) {
    const resultClass = choice.uid === this.props.current.correctAnswer ? `label-success label` : `label label-danger`;
    return resultClass + ' ' + this.showAnswer();
  }

  getResultMessage() {
    if (this.userWon()) {
      return (
        <span>
          <strong>You Rock! </strong> You choosed <strong> right answer</strong>
        </span>
      );
    } else {
      return (
        <span>
          <strong>Try again!</strong> You choosed<strong> wrong answer</strong>
        </span>
      );
    }
  }

  getResultMessageClass() {
    let resultMessageClass = this.showAnswer();
    return this.userWon() ? 'alert alert-success ' + resultMessageClass : 'alert alert-danger ' + resultMessageClass;
  }

  getResultMessageIcon() {
    const resultMessageIcon = "fa fa-2x answer-icon";
    return this.userWon() ? 'fa-thumbs-o-up ' + resultMessageIcon : 'fa-thumbs-o-down ' + resultMessageIcon;
  }

  getSummaryMessageClass() {
    let resultMessageClass = this.showResult();
    return this.userWon() ? 'alert alert-success ' + resultMessageClass : 'alert alert-danger ' + resultMessageClass;
  }

  render() {
    let title = this.props.question.header.title;
    let choices = this.props.question.choices.map((choice, index) => {
      const dom_id = `trivia-choice-${index}`;
      return (
        <Choice value={choice.uid} key={choice.uid} title={choice.title} onChange={this.userAnswer} dom_id={dom_id}
                label={this.getResultLabel(choice)} labelClass={this.getResultClass(choice)}
                disabled={!!this.props.current.correctAnswer}
        />
      );
    });
    return (
      <div className="question-list">
        <TriviaResultMessage className={this.getSummaryMessageClass()} icon={this.getResultMessageIcon()}
                             message={this.getResultMessage()} onClickNext={this.nextQuestion}/>
        <div className="question-wrapper">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">{title}</h3>
            </div>
            <div className="panel-body">
              {choices}
            </div>
            <QuestionResultMessage className={this.getResultMessageClass()} icon={this.getResultMessageIcon()}
                                   message={this.getResultMessage()} onClickNext={this.nextQuestion}/>
          </div>
        </div>
      </div>
    );
  }
}

QuestionList.propTypes = {
  question: React.PropTypes.object.isRequired,
  current: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired
};


function getQuestionByUID(questions, uid) {
  const question = questions.filter(question => question.uid === uid);
  if (question) return question[0]; // filter always return array
  return null;
}

function mapStateToProps(state, ownProps) {

  let question = {
    header: {
      title: ''
    },
    choices: []
  };

  if (state.questions.length > 0 && state.current.uid) {
    question = getQuestionByUID(state.questions, state.current.uid);
  }

  return {
    question: question,
    current: state.current
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(questionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
