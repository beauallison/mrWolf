import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import moment from 'moment-timezone';
import ICity from '../../../ICity';
import { generateTime } from '../../../utils';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-right: 70px;
  &:not(:first-child) {
    margin-left: 70px;
  }
`;

const Time = styled.h2`
  font-family: 'Metropolis';
  font-size: 20px;

  color: ${(props) => props.theme.colors.primary};

  margin-bottom: 0px;
`;

const Text = styled.p`
  font-family: 'Inter';
  line-height: 26px;
  letter-spacing: 0.5px;

  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 0px;
  margin-top: 0px;
`;

export default (props: ICity) => {
  const { timezone } = props;
  const [currentTime, setCurrentTime] = useState(generateTime({ timezone }));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(generateTime({ timezone }));
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <Container>
      <Time>{currentTime}</Time>
      <Text>{props.name}</Text>
      <Text>{props.country}</Text>
    </Container>
  );
};
