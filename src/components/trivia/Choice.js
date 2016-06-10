import React from 'react';

const Choice = ({title, dom_id, label, labelClass, value, onChange, disabled}) => {
  return (
    <div className="well well-sm">
      <input disabled={disabled} onChange={onChange} type="radio" name="question" id={dom_id} value={value}/> <label
      htmlFor={dom_id}>{title}</label> <span
      className={labelClass}>{label}</span>
    </div>
  );
};

Choice.propTypes =  {
  title: React.PropTypes.string.isRequired,
  dom_id: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  labelClass: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default Choice;
