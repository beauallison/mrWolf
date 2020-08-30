import React from 'react';
import styled from '@emotion/styled';
import IChecklist from '../../IChecklist';

const NewItem = styled.input`
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
  createItem: void;
}

export default ({ createItem }: IProps) => (
  <NewItem
    placeholder="new item"
    onKeyDown={(event) => {
      if (event.key === 'Enter' || event.keyCode === 13) {
        return createItem(event.target.value);
      }
    }}
  />
);
