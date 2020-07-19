import React from 'react';
import styled from '@emotion/styled';
import City from './City';
import ICity from '../../../ICity';

const Container = styled.div`
  display: flex;
  flex-direction: row;

  margin-left: 10%;
  margin-bottom: 3%;
`;

export interface IProps {
  cities: ICity[];
}

export default (props: IProps) => (
  <Container>
    {props.cities.map((city) => (
      <City {...city} />
    ))}
  </Container>
);
