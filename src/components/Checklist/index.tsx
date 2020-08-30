import React from 'react';
import styled from '@emotion/styled';
import IChecklist from '../../IChecklist';
import Item from './Item';
import NewItem from './NewItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 70%;
  margin-right: 20%;
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
    />
    {props.checklist.map((item) => (
      <Item {...item} />
    ))}
  </Container>
);
