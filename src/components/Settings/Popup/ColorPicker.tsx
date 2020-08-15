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

const Popover = styled.div`
  position: absolute;
  right: 60px;
  z-index: 2;
`;

const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

export default ({ color, onChange }) => {
  const [pickerIsVisible, setPickerIsVisible] = useState(false);

  const togglePicker = () => setPickerIsVisible(!pickerIsVisible);

  return (
    <ColoredButton color={color} onClick={() => !pickerIsVisible && togglePicker()}>
      {pickerIsVisible && (
        <Popover>
          <Cover onClick={togglePicker} />
          <ChromePicker color={color} onChange={({ hex }) => onChange(hex)} disableAlpha />
        </Popover>
      )}
    </ColoredButton>
  );
};
