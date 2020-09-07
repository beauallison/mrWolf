import React from 'react';
import styled from '@emotion/styled';
import IChecklist from '../../IChecklist';
import Checkbox from './Checkbox';

const DeleteButton = styled.button`
  display: none;
  background-color: ${(props) => props.theme.colors.background};
  border: solid 1px ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  width: 25px;
  height: 25px;

  color: ${(props) => props.theme.colors.secondary};
  text-align: center;
  font-size: 12px;
`;

const ChecklistItem = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;

  align-items: center;

  max-width: 300px;

  &:hover ${DeleteButton} {
    display: block;
  }
`;

const Description = styled.p`
  font-family: 'Inter';
  color: ${(props) => props.theme.colors.onBackground};
  text-decoration: ${(props) => (props.complete ? 'line-through' : '')};

  word-wrap: anywhere;
  margin-left: 10px;
`;

export interface IChecklistItem extends IChecklist {
  toggleComplete: Function;
  deleteItem: Function;
}

export default (props: IChecklistItem) => (
  <ChecklistItem>
    <Checkbox checked={props.complete} onChange={props.toggleComplete} />
    <Description complete={props.complete}>{props.name}</Description>
    <DeleteButton onClick={props.deleteItem}>X</DeleteButton>
  </ChecklistItem>
);
