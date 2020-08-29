import React from 'react';
import styled from '@emotion/styled';
import IChecklist from '../../IChecklist';
import Item from './Item';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100vh;
  width: 100vw;
`;

const CreateItem = styled.button``;

export interface IProps {
  checklist?: IChecklist[];
  updateChecklist: void;
}

export default ({ checklist }: IProps) => (
  <Container>
    <CreateItem />
    {checklist && <Item {...checklist} />}
  </Container>
);
