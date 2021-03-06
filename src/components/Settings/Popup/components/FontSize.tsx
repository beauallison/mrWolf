import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div``;

const Button = styled.button`
  width: 28px;
  height: 28px;

  border: solid 1px ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.onBackground};

  font-size: 15px;
  font-weight: 700;
  text-align: center;

  &:nth-of-type(2) {
    margin-left: 10px;
  }
`;

export interface IProps {
  displayFontSize: number;
  updateDisplayFontSize: Function;
}

export default ({ displayFontSize, updateDisplayFontSize }: IProps) => {
  const increaseFontSize = () => {
    if (displayFontSize >= 2) return;
    return updateDisplayFontSize(displayFontSize + 0.02);
  };

  const decreaseFontSize = () => {
    if (displayFontSize <= -0.5) return;
    return updateDisplayFontSize(displayFontSize - 0.02);
  };

  return (
    <Container>
      <Button onClick={decreaseFontSize}>-</Button>
      <Button onClick={increaseFontSize}>+</Button>
    </Container>
  );
};
