import PropTypes from 'prop-types';
import {
  Title,
  StatisticsList,
  StatisticsItem,
  Amount,
} from './Statistics.styled';
import { Notification } from '../Notification/Notification';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <Title>Statistics</Title>
      {total ? (
        <StatisticsList>
          <StatisticsItem>
            Good: <Amount>{good}</Amount>
          </StatisticsItem>
          <StatisticsItem>
            Neutral: <Amount>{neutral}</Amount>
          </StatisticsItem>
          <StatisticsItem>
            Bad: <Amount>{bad}</Amount>
          </StatisticsItem>
          <StatisticsItem>
            Total: <Amount>{total}</Amount>
          </StatisticsItem>
          <StatisticsItem>
            Positive feedback: <Amount>{positivePercentage}%</Amount>
          </StatisticsItem>
        </StatisticsList>
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
