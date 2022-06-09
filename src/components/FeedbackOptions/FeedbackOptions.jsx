import React from 'react';
import PropTypes from 'prop-types';
import {
  ListOfButtons,
  Item,
  GoodButton,
  NeutralButton,
  BadButton,
} from './FeedbackOptions.styled';

export function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <>
      <ListOfButtons>
        <Item>
          <GoodButton value="good" onClick={e => onLeaveFeedback(e)}>
            Good
          </GoodButton>
        </Item>
        <Item>
          <NeutralButton value="neutral" onClick={e => onLeaveFeedback(e)}>
            Neutral
          </NeutralButton>
        </Item>
        <Item>
          <BadButton value="bad" onClick={e => onLeaveFeedback(e)}>
            Bad
          </BadButton>
        </Item>
      </ListOfButtons>
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
