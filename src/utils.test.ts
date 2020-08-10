import { generateTime, citiesList } from './utils';

describe('utils', () => {
  it('should create cities list', () => {
    const list = citiesList();
    expect(list.length).toEqual(6183);
  });

  it('should generate time', () => {
    const city = {
      country: 'United Arab Emirates',
      name: 'Dubai',
      timezone: 'Asia/Dubai',
    };

    const time = generateTime(city);

    expect(typeof time).toEqual('string');
  });
});
