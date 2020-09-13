import React from 'react';
import Select from 'react-select';
import { FixedSizeList as List } from 'react-window';
import { Styles } from './SelectStyles';
import { IValue, cityToValue, citiesToValues, generateOptions, valueToCity, valuesToCities } from '../../utils';
import ICity from '../../../../ICity';
import * as Storage from '../../../../storage';

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
  onChange: Function;
}

const createLocalOptions = (isMulti) => {
  if (!isMulti) generateOptions();
  return generateOptions();
};

export default ({ value, isMulti, onChange }: IProps) => (
  <Select
    components={{ MenuList }}
    options={createLocalOptions(isMulti)}
    styles={Styles}
    placeholder={'Select'}
    isMulti={isMulti}
    isClearable={true}
    value={value ? (isMulti ? citiesToValues(value) : cityToValue(value)) : undefined}
    onChange={async (v: IValue | IValue[]) => {
      if (v === null) {
        isMulti ? await Storage.saveCities(null) : await Storage.saveHome(null);
        return isMulti ? onChange([]) : onChange(null);
      }

      const newValue = isMulti ? valuesToCities(v) : valueToCity(v);
      isMulti ? await Storage.saveCities(newValue) : await Storage.saveHome(newValue);
      return onChange(newValue);
    }}
  />
);
