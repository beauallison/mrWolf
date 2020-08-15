import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ChromePicker } from 'react-color';

const ColoredButton = styled.div`
  width: 25px;
  height: 25px;

  border: solid 1px white;
  border-radius: 4px;
  background-color: ${(props) => props.color};
`;

export default ({ color, onChange }) => {
  const [pickerIsVisible, setPickerIsVisible] = useState(false);

  const togglePicker = () => setPickerIsVisible(!pickerIsVisible);

  return pickerIsVisible ? (
    <ChromePicker color={color} onChange={({ hex }) => onChange(hex)} disableAlpha />
  ) : (
    <ColoredButton color={color} onClick={togglePicker} />
  );
};
