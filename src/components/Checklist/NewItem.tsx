import React, { useState } from 'react';
import styled from '@emotion/styled';

const NewItem = styled.input`
  font-family: 'Inter';
  font-size: 13px;

  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.onBackground};

  height: 20px;
  max-width: 300px;

  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};

  &:focus {
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
    outline: none;
  }
`;

export interface IProps {
  createItem: void;
  maxItemsReached: boolean;
}

export default ({ maxItemsReached, createItem }: IProps) => {
  const [value, setValue] = useState('');
  return (
    <NewItem
      value={value}
      placeholder="new item"
      onChange={(event) => setValue(event.target.value)}
      onKeyDown={async (event) => {
        const newValue = event.target.value;
        if (newValue.length === 0 || maxItemsReached) return;
        if (event.key === 'Enter' || event.keyCode === 13) {
          await setValue('');
          return createItem(newValue);
        }
      }}
    />
  );
};
