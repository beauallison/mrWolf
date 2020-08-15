import { theme } from '../../theme';

const commonStyles = (styles) => ({
  ...styles,
  color: theme.colors.onBackground,
  fontFamily: 'Inter',
});

const indicators = (styles) => ({
  ...styles,
  color: theme.colors.onBackground,
  ':hover': {
    color: theme.colors.primary,
  },
});

export const Styles = {
  placeholder: commonStyles,
  singleValue: commonStyles,
  input: commonStyles,
  multiValue: (styles) => ({
    ...styles,
    backgroundColor: theme.colors.onBackground,
    color: theme.colors.background,
    fontFamily: 'Inter',
    fontSize: '16px',
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    ':hover': {
      backgroundColor: theme.colors.primary,
    },
  }),
  clearIndicator: indicators,
  dropdownIndicator: indicators,
  indicatorSeparator: (styles) => ({
    ...styles,
    backgroundColor: theme.colors.primary,
  }),
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: theme.colors.background,
    borderColor: isFocused ? theme.colors.onBackground : theme.colors.background,

    boxShadow: 0,
    ':hover': {
      border: 0,
    },
  }),
  option: (styles) => ({
    ...styles,
    backgroundColor: theme.colors.background,
    color: theme.colors.onBackground,
    fontFamily: 'Inter',
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: theme.colors.background,
  }),
};
