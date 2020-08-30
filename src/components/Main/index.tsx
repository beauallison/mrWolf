import React from 'react';
import styled from '@emotion/styled';
import Home from './Home';
import Cities from './Cities';
import Checklist from '../Checklist';
import ICity from '../../ICity';
import IChecklist from '../../IChecklist';
import { check } from 'prettier';

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
    name: 'Create temp checklist',
    complete: true,
  },
  {
    name: 'Make a checklist list',
    complete: false,
  },
  {
    name: 'Publish new version',
    complete: false,
  },
];

const sortChecklist = (checklist: IChecklist[]) => checklist.sort((a, b) => Number(a.complete) - Number(b.complete));

export default ({ home, cities, ...props }: IProps) => (
  <Container checklist={tempChecklist}>
    <TimeViewer>
      <Home {...home} {...props} />
      {cities && <Cities cities={cities} {...props} />}
    </TimeViewer>
    {tempChecklist && <Checklist checklist={sortChecklist(tempChecklist)} />}
  </Container>
);
