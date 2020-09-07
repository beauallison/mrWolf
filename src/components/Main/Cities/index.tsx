import React from 'react';
import styled from '@emotion/styled';
import City from './City';
import ICity from '../../../ICity';

const Container = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 34%;

  margin-left: 10%;
  margin-bottom: 3%;
`;

export interface IProps {
  cities: ICity[];
  display24HourTime?: boolean;
}

export default ({ cities, display24HourTime }: IProps) => (
  <Container>
    {cities.map((city) => (
      <City {...city} display24HourTime={display24HourTime} />
    ))}
  </Container>
);
