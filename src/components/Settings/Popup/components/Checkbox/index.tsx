import React from 'react';
import styled from '@emotion/styled';
import Checkmark from './Checkmark';

const StyledCheckbox = styled.div`
  width: 25px;
  height: 25px;

  border: 1px solid ${(props) => (props.checked ? props.theme.colors.primary : props.theme.colors.onSurface)};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.onSurface};
`;

export interface IProps {
  checked: boolean;
  onChange: Function;
}

export default ({ checked, onChange }: IProps) => (
  <StyledCheckbox checked={checked} onClick={onChange}>
    {checked && <Checkmark />}
  </StyledCheckbox>
);
