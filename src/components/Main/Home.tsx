import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { generateTime } from '../../utils';
import ICity from '../../ICity';
import props from '../../pages/props';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-top: 10%;
  padding-left: 10%;
`;

const Time = styled.h1`
  font-family: 'Metropolis';
  font-size: ${(props) => `${50 * props.theme.fontSize}px`};
  margin-block-start: 33px;
  margin-bottom: 0px;

  color: ${(props) => props.theme.colors.primary};
`;

const Text = styled.p`
  font-family: 'Inter';
  font-weight: 700;
  font-size: ${(props) => `${16 * props.theme.fontSize}px`};

  color: ${(props) => props.theme.colors.secondary};

  line-height: 26px;
  letter-spacing: 0.5px;
  margin-top: 0px;
  margin-left: 5px;
`;

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

export interface IHome extends ICity {
  display24HourTime?: boolean;
  displaySeconds?: boolean;
  timeAdjust: number;
  setTimeAdjust: Function;
}

export default ({ name, country, setTimeAdjust, ...timeProps }: IHome) => {
  const [currentTime, setCurrentTime] = useState(generateTime(timeProps));

  const timeAdjustDecrease = () => {
    if (timeProps.timeAdjust <= -24) return;
    return setTimeAdjust(timeProps.timeAdjust - 1);
  };

  const timeAdjustIncrease = () => {
    if (timeProps.timeAdjust >= 24) return;
    return setTimeAdjust(timeProps.timeAdjust + 1);
  };

  const timeAdjustReset = () => setTimeAdjust(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(generateTime(timeProps));
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, [timeProps]);

  return (
    <Container>
      <Time>{currentTime}</Time>
      <Text>{`${name}, ${country}`}</Text>
      <Button onClick={timeAdjustDecrease}>-</Button>
      <Button onClick={timeAdjustIncrease}>+</Button>
      <Button onClick={timeAdjustReset}>R</Button>
      <Text>{timeProps.timeAdjust}</Text>
    </Container>
  );
};
