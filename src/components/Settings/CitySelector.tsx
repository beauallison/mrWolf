import React from 'react';
import styled from '@emotion/styled';
import Select from 'react-select';
import { FixedSizeList as List } from 'react-window';
import { Styles } from './CitySelectStyles';
import { IValue, cityToValue, citiesToValues, generateOptions, valueToCity, valuesToCities } from './utils';
import ICity from '../../ICity';
import * as LocalStorage from '../../localStorage';

const HEIGHT = 35;

const MenuList = ({ options, children, maxHeight, getValue }) => {
  const [value] = getValue();
  const initialOffset = options.indexOf(value) * HEIGHT;

  return (
    <List height={maxHeight} itemCount={children.length} itemSize={HEIGHT} initialScrollOffset={initialOffset}>
      {({ index, style }) => <div style={style}>{children[index]}</div>}
    </List>
  );
};

const StyledSelect = styled(Select)`
  width: 300px;
`;

export interface IProps {
  value: ICity | ICity[];
  isMulti?: boolean;
  onChange: void;
}

export default ({ value, isMulti, onChange }: IProps) => (
  <StyledSelect
    components={{ MenuList }}
    options={generateOptions()}
    styles={Styles}
    placeholder={'Select'}
    isMulti={isMulti}
    value={value ? (isMulti ? citiesToValues(value) : cityToValue(value)) : undefined}
    onChange={(v: IValue | IValue[]) => {
      if (v === null) return onChange([]);
      const newValue = isMulti ? valuesToCities(v) : valueToCity(v);
      isMulti ? LocalStorage.saveCities(newValue) : LocalStorage.saveHome(newValue);
      return onChange(newValue);
    }}
  />
);
