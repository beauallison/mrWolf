import React from 'react';
import styled from '@emotion/styled';
import Checkmark from './Checkmark';

const StyledCheckbox = styled.div`
  width: 20px;
  height: 20px;

  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.background};
`;

export interface IProps {
  checked: boolean;
  onChange: void;
}

export default ({ checked, onChange }: IProps) => (
  <StyledCheckbox checked={checked} onClick={onChange}>
    {checked && <Checkmark />}
  </StyledCheckbox>
);
