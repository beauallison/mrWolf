import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { generateTime } from '../../../utils';
import ICity from '../../../ICity';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  min-width: 175px;
  margin-top: 20px;
`;

const Time = styled.h2`
  font-family: 'Metropolis';
  font-size: ${(props) => `${20 * props.theme.fontSize}px`};

  color: ${(props) => props.theme.colors.primary};

  margin-bottom: 0px;
`;

const Text = styled.p`
  font-family: 'Inter';
  line-height: 26px;
  letter-spacing: 0.5px;
  font-size: ${(props) => `${16 * props.theme.fontSize}px`};

  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 0px;
  margin-top: 0px;
`;

export interface IProps extends ICity {
  display24HourTime?: boolean;
  displayPeriod?: boolean;
}

export default ({ name, country, ...timeProps }: IProps) => {
  const [currentTime, setCurrentTime] = useState(generateTime(timeProps));

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
      <Text>{name}</Text>
      <Text>{country}</Text>
    </Container>
  );
};
