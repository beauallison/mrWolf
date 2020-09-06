import React from 'react';
import styled from '@emotion/styled';
import IChecklist from '../../IChecklist';
import Item from './Item';
import NewItem from './NewItem';
import MaxItems from './MaxItems';

const MAX_ITEMS = 150;

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

export default (props: IProps) => (
  <Container>
    <NewItem
      createItem={(item) => {
        const newItem = {
          name: item,
          complete: false,
        } as IChecklist;

        const newChecklist = [newItem, ...props.checklist];
        return props.updateChecklist(newChecklist);
      }}
      maxItemsReached={props.checklist.length >= MAX_ITEMS}
    />
    {props.checklist.length >= MAX_ITEMS && (
      <MaxItems
        clearCompletedItems={() => {
          const newChecklist = props.checklist.filter(({ complete }) => !complete);
          return props.updateChecklist(newChecklist);
        }}
      />
    )}
    <ScrollBox>
      {props.checklist.map((item, index) => (
        <Item
          {...item}
          toggleComplete={() => {
            const value = !item.complete;
            const newItem = {
              name: item.name,
              complete: value,
            } as IChecklist;
            const newChecklist = [...props.checklist];
            newChecklist[index] = newItem;
            return props.updateChecklist(newChecklist);
          }}
          deleteItem={() => {
            const newChecklist = [...props.checklist];
            newChecklist.splice(index, 1);
            return props.updateChecklist(newChecklist);
          }}
        />
      ))}
    </ScrollBox>
  </Container>
);
