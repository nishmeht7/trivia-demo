import React from 'react';

const QuestionResultMessage = ({className, icon, message, onClickNext}) => {
  return (
    <div className="panel-footer">
      <div className={className}>
        <p><i className={icon} aria-hidden="true"/>{message}
          <button className="btn btn-default btn-sm" onClick={onClickNext}>
            <i className="fa fa-arrow-right" aria-hidden="true"/>Next
          </button>
          .
        </p>
      </div>
    </div>
  );
};

QuestionResultMessage.propTypes =  {
  className: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
  message: React.PropTypes.object.isRequired,
  onClickNext: React.PropTypes.func.isRequired
};

export default QuestionResultMessage;
