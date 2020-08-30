import React from 'react';
import styled from '@emotion/styled';
import IChecklist from '../../IChecklist';
import Checkbox from './Checkbox';

const ChecklistItem = styled.div`
  display: flex;
  align-items: center;

  max-width: 200px;
`;

const Title = styled.p`
  font-family: 'Inter';

  color: white;
  margin-left: 10px;

  text-decoration: ${(props) => (props.complete ? 'line-through' : '')};
`;

export interface IChecklistItem extends IChecklist {
  toggleComplete: void;
}

export default (props: IChecklistItem) => (
  <ChecklistItem>
    <Checkbox checked={props.complete} onChange={props.toggleComplete} />
    <Title complete={props.complete}>{props.name}</Title>
  </ChecklistItem>
);
