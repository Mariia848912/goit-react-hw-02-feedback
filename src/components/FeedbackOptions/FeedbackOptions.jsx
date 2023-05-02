import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ul className={css.buttonsList}>
      {options.map(option => (
        <li key={option} className={css.buttonsListItem}>
          <button
            type="button"
            className={css.button}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired
};
