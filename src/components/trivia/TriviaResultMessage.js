import React from 'react';

const TriviaResultMessage = ({className, icon, message, onClickNext}) => {
  return (
    <div className="panel-footer panel-summary">
      <div className={className}>
        <p><i className={icon} aria-hidden="true"/>{message}
          .
        </p>
        <p><button className="btn btn-default btn-sm" onClick={onClickNext}>
          <i className="fa fa-arrow-right" aria-hidden="true"/>Try Again!
        </button></p>
      </div>
    </div>
  );
};

TriviaResultMessage.propTypes =  {
  className: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
  message: React.PropTypes.object.isRequired,
  onClickNext: React.PropTypes.func.isRequired
};

export default TriviaResultMessage;
