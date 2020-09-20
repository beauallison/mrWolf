import React from 'react';
import styled from '@emotion/styled';
import Home from './Home';
import Cities from './Cities';
import Checklist from '../Checklist';
import ICity from '../../ICity';
import IChecklist from '../../IChecklist';

const Container = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.displayChecklist ? '70% 30%' : '100%')};

  height: 100vh;
  width: 100vw;

  overflow: scroll;
  scrollbar-width: none;
  scrollbar-color: ${(props) => props.theme.colors.surface};
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
  displayChecklist?: boolean;
  checklist: IChecklist[];
  updateChecklist: Function;
  timeAdjust: number;
  setTimeAdjust: Function;
}

const sortChecklist = (checklist: IChecklist[]) => checklist.sort((a, b) => Number(a.complete) - Number(b.complete));

export default (props: IProps) => (
  <Container displayChecklist={props.displayChecklist}>
    <TimeViewer>
      <Home {...props.home} {...props} />
      {props.cities && <Cities cities={props.cities} {...props} />}
    </TimeViewer>
    {props.displayChecklist && (
      <Checklist checklist={sortChecklist(props.checklist)} updateChecklist={props.updateChecklist} />
    )}
  </Container>
);
