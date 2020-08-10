import React from 'react';
import styled from '@emotion/styled';
import Home from './Home';
import Cities from './Cities';
import ICity from '../../ICity';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100vh;
  width: 100vw;
`;

export interface IProps {
  cities: ICity[];
  home: ICity;
  display24HourTime?: boolean;
  displaySeconds?: boolean;
}

export default ({ home, cities, ...props }: IProps) => (
  <Container>
    <Home {...home} {...props} />
    {cities && <Cities cities={cities} {...props} />}
  </Container>
);
