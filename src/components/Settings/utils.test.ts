import { cityToValue, citiesToValues, generateOptions, valueToCity, valuesToCities } from './utils';

describe('utils', () => {
  const city = {
    country: 'United Arab Emirates',
    name: 'Dubai',
    timezone: 'Asia/Dubai',
  };

  const value = {
    city,
    label: 'Dubai, United Arab Emirates',
    value: 'Dubai',
  };

  it('should generate city options', () => {
    const options = generateOptions();
    expect(options.length).toEqual(6184);
    expect(options[0]).toMatchSnapshot();
  });

  it('should convert cities to value', () => {
    expect(cityToValue(city)).toMatchSnapshot();
    expect(citiesToValues([city, city])).toMatchSnapshot();
  });

  it('should convert values to cities', () => {
    expect(valueToCity(value)).toMatchSnapshot();
    expect(valuesToCities([value, value])).toMatchSnapshot();
  });
});
