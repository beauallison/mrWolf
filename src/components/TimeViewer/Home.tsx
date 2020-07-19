import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { fontWeight } from '../../constants';
import ICity from '../../ICity';
import { generateTime } from '../../utils';

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

export default (props: ICity) => {
  const { timezone } = props;
  const timeProps = { timezone, displaySeconds: true };

  const [currentTime, setCurrentTime] = useState(generateTime(timeProps));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(generateTime(timeProps));
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, [props.timezone]);

  return (
    <Container>
      <Time>{currentTime}</Time>
      <Text>{`${props.name}, ${props.country}`}</Text>
    </Container>
  );
};
