import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      <ul>
        {options.map(option => (
          <button
            className={`${s.button} `}
            type="button"
            key={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};
