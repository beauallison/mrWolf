import React from 'react';
import styled from '@emotion/styled';
import Home from './Home';
import Cities from './Cities';
import Checklist from '../Checklist';
import ICity from '../../ICity';

const Container = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.checklist ? '70% 30%' : '100%')};

  height: 100vh;
  width: 100vw;
`;

const TimeViewer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export interface IProps {
  cities: ICity[];
  home: ICity;
  display24HourTime?: boolean;
  displaySeconds?: boolean;
}

const tempChecklist = [
  {
    name: 'ABC',
    complete: true,
  },
  {
    name: 'XYZ',
    complete: false,
  },
  {
    name: '123',
    complete: false,
  },
];

export default ({ home, cities, ...props }: IProps) => (
  <Container checklist={tempChecklist}>
    <TimeViewer>
      <Home {...home} {...props} />
      {cities && <Cities cities={cities} {...props} />}
    </TimeViewer>
    {tempChecklist && <Checklist checklist={tempChecklist} />}
  </Container>
);
