import React from 'react';
import styled from '@emotion/styled';
import IChecklist from '../../IChecklist';
import Item from './Item';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 70%;
  margin-right: 20%;
`;

const CreateItem = styled.button`
  height: 30px;
  max-width: 30px;
`;

export interface IProps {
  checklist?: IChecklist[];
  updateChecklist: void;
}

export default ({ checklist }: IProps) => (
  <Container>
    <CreateItem />
    {checklist.map((item) => (
      <Item {...item} />
    ))}
  </Container>
);
