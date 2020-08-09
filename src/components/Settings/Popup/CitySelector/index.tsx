import React from 'react';
import Select from 'react-select';
import { FixedSizeList as List } from 'react-window';
import { Styles } from './CitySelectorStyles';
import { IValue, cityToValue, citiesToValues, generateOptions, valueToCity, valuesToCities } from '../../utils';
import ICity from '../../../../ICity';
import * as LocalStorage from '../../../../localStorage';
import * as BrowserStorage from '../../../../browserStorage';

const HEIGHT = 35;

const MenuList = ({ options, children, maxHeight, getValue }) => {
  const [value] = getValue();
  const initialOffset = options.indexOf(value) * HEIGHT;

  return (
    <List height={maxHeight} itemCount={children.length} itemSize={HEIGHT} initialScrollOffset={initialOffset}>
      {({ index, style }) => <div style={{ ...style, whiteSpace: 'nowrap' }}>{children[index]}</div>}
    </List>
  );
};

export interface IProps {
  value: ICity | ICity[];
  isMulti?: boolean;
  onChange: void;
}

const createLocalOptions = (value, isMulti) => {
  if (!isMulti) generateOptions();
  if (Array.isArray(value) && value.length > 5) return [];
  return generateOptions();
};

export default ({ value, isMulti, onChange }: IProps) => (
  <Select
    components={{ MenuList }}
    options={createLocalOptions(value, isMulti)}
    styles={Styles}
    placeholder={'Select'}
    isMulti={isMulti}
    isClearable={true}
    value={value ? (isMulti ? citiesToValues(value) : cityToValue(value)) : undefined}
    onChange={(v: IValue | IValue[]) => {
      if (v === null) {
        isMulti ? LocalStorage.saveCities(null) : LocalStorage.saveHome(null);
        return isMulti ? onChange([]) : onChange(null);
      }

      const newValue = isMulti ? valuesToCities(v) : valueToCity(v);
      isMulti ? LocalStorage.saveCities(newValue) : LocalStorage.saveHome(newValue);
      return onChange(newValue);
    }}
  />
);
