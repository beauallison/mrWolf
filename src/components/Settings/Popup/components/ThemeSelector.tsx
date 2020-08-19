import React from 'react';
import Select from 'react-select';
import { Styles } from './SelectStyles';
import { colorSchemes } from '../../../theme';

const options = colorSchemes.map(({ name }) => ({ value: name, label: name }));

export default ({ value, onChange }) => <Select options={options} styles={Styles} value={value} onChange={onChange} />;
