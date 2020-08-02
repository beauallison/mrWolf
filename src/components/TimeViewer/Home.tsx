import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { fontWeight } from '../../constants';
import { generateTime } from '../../utils';
import ICity from '../../ICity';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-top: 10%;
  padding-left: 10%;
`;

const Time = styled.h1`
  font-family: 'Metropolis';
  font-size: 50px;
  margin-bottom: 0px;

  color: ${(props) => props.theme.colors.primary};
`;

const Text = styled.p`
  font-family: 'Inter';
  font-weight: ${fontWeight.bold};

  color: ${(props) => props.theme.colors.secondary};

  line-height: 26px;
  letter-spacing: 0.5px;
  margin-top: 0px;
  margin-left: 5px;
`;

export interface IHome extends ICity {
  display24HourTime?: boolean;
  displaySeconds?: boolean;
}

export default ({ name, country, ...timeProps }: IHome) => {
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
      <Text>{`${name}, ${country}`}</Text>
    </Container>
  );
};
