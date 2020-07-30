import React from 'react';
import styled from '@emotion/styled';

const StyledCheckbox = styled.input`
  width: 50px;
  height: 50px;
`;

export interface IProps {
  checked: boolean;
  onChange: void;
}

export default ({ checked, onChange }: IProps) => (
  <StyledCheckbox type="checkbox" checked={checked} onChange={onChange} />
);
