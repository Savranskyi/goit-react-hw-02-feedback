import PropTypes from 'prop-types';
import { Title, StatList, StatItem, Amount } from './Statistics.styled';
import { Notification } from '../Notification/Notification';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <Title>Statistics</Title>
      {total ? (
        <StatList>
          <StatItem>
            Good: <Amount>{good}</Amount>
          </StatItem>
          <StatItem>
            Neutral: <Amount>{neutral}</Amount>
          </StatItem>
          <StatItem>
            Bad: <Amount>{bad}</Amount>
          </StatItem>
          <StatItem>
            Total: <Amount>{total}</Amount>
          </StatItem>
          <StatItem>
            Positive feedback: <Amount>{positivePercentage}%</Amount>
          </StatItem>
        </StatList>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
