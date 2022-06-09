import styled from '@emotion/styled';

export const ButonsList = styled.ul`
  display: flex;
  column-gap: 5px;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Item = styled.li``;

export const GoodButton = styled.button`
  font-size: 14px;
  width: 70px;
  height: 30px;
  box-shadow: rgba(0, 0, 0, 0.15) 2px 2px 3px;
  border-radius: 5px;
  background-color: #0f0;
  opacity: 0.7;

  &:hover,
  &:focus {
    opacity: 0.9;
  }
`;

export const NeutralButton = styled(GoodButton)`
  background-color: #ff0;
  &:hover,
  &:focus {
    opacity: 0.9;
  }
`;

export const BadButton = styled(GoodButton)`
  background-color: #f00;
  &:hover,
  &:focus {
    opacity: 0.9;
  }
`;
