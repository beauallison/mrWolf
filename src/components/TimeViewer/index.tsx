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
}

export default (props: IProps) => (
  <Container>
    <Home {...props.home} />
    <Cities cities={props.cities} />
  </Container>
);
