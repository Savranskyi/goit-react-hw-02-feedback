import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, positivePercentage, total }) {
  return (
    <div className={s.statContainer}>
      {total > 0 ? (
        <>
          <p className={`${s.stat}`}>Good: {good}</p>
          <p className={`${s.stat}`}>Neutral: {neutral}</p>
          <p className={`${s.stat}`}>Bad: {bad}</p>
          <p className={s.stat}>Total: {total}</p>
          <p className={`${s.stat} ${positivePercentage}`}>
            Positive feedback: {positivePercentage}%
          </p>
        </>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </div>
  );
}

export default Statistics;

Statistics.propTypes = {
  positivePercentage: PropTypes.number,
  total: PropTypes.number,
};
