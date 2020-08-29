import React from 'react';
import styled from '@emotion/styled';
import IChecklist from '../../IChecklist';
import Checkbox from './Checkbox';

const ChecklistItem = styled.div``;

const Title = styled.p``;

export interface IChecklistItem extends IChecklist {
  toggleComplete: void;
}

export default (props: IChecklistItem) => (
  <ChecklistItem>
    <Title>{props.Title}</Title>
    <Checkbox checked={props.complete} onChange={props.toggleComplete} />
  </ChecklistItem>
);
