import React from 'react';
import styled from '@emotion/styled';
import IChecklist from '../../IChecklist';
import Item from './Item';
import NewItem from './NewItem';
import MaxItems from './MaxItems';
import { ManageChecklist } from './ManageChecklist';

const MAX_ITEMS = 10;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  max-height: 100vh;
`;

const ScrollBox = styled.div`
  height: 350px;
  overflow: scroll;
  margin-bottom: 50px;

  scrollbar-width: none;
  scrollbar-color: ${(props) => props.theme.colors.surface};

  &::-webkit-scrollbar,
  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-thumb,
  &::-webkit-scrollbar-corner {
    background: ${(props) => props.theme.colors.background};
  }
`;

export interface IProps {
  checklist?: IChecklist[];
  updateChecklist: void;
}

export default (props: IProps) => {
  const { createItem, toggleItem, deleteItem, clearCompletedItems } = ManageChecklist(props);

  return (
    <Container>
      <NewItem createItem={createItem} maxItemsReached={props.checklist.length >= MAX_ITEMS} />
      {props.checklist.length >= MAX_ITEMS && <MaxItems clearCompletedItems={clearCompletedItems} />}
      <ScrollBox>
        {props.checklist.map((item, index) => (
          <Item {...item} toggleComplete={() => toggleItem({ item, index })} deleteItem={() => deleteItem({ index })} />
        ))}
      </ScrollBox>
    </Container>
  );
};
