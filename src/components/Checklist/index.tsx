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

const EmptyItem = styled.input`
  font-family: 'Inter';
  font-size: 13px;

  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.onBackground};

  height: 20px;
  max-width: 250px;

  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.onBackground};

  &:focus {
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.onBackground};
    outline: none;
  }
`;

export interface IProps {
  checklist?: IChecklist[];
  updateChecklist: void;
}

export default ({ checklist }: IProps) => (
  <Container>
    <EmptyItem placeholder="new item" />
    {checklist.map((item) => (
      <Item {...item} />
    ))}
  </Container>
);
