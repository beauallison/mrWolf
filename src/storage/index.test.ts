import {
  saveHome,
  getHome,
  saveCities,
  getCities,
  saveDisplay24HrTime,
  getDisplay24HrTime,
  saveDisplaySeconds,
  getDisplaySeconds,
  getAll,
} from './index';

describe('storage', () => {
  const city = {
    country: 'United Arab Emirates',
    name: 'Dubai',
    timezone: 'Asia/Dubai',
  };

  it('should save and retrieve home', () => {
    saveHome(city);
    const home = getHome();
    expect(home).toEqual(city);
  });

  it('should save and retrieve cities', () => {
    saveCities([city, city]);
    const cities = getCities();
    expect(cities).toEqual([city, city]);
  });

  it('should save and retrieve display 24hr time', () => {
    saveDisplay24HrTime(true);
    const display24HrTime = getDisplay24HrTime();
    expect(display24HrTime).toEqual(true);
  });

  it('should save and retrieve display seconds', () => {
    saveDisplaySeconds(false);
    const displaySeconds = getDisplaySeconds();
    expect(displaySeconds).toEqual(false);
  });

  it('should get all saved items', () => {
    saveHome(city);
    saveCities([city, city]);
    saveDisplay24HrTime(true);
    saveDisplaySeconds(false);

    const results = getAll();
    expect(results).toMatchInlineSnapshot(`
      Object {
        "KEY_CITIES": Array [
          Object {
            "country": "United Arab Emirates",
            "name": "Dubai",
            "timezone": "Asia/Dubai",
          },
          Object {
            "country": "United Arab Emirates",
            "name": "Dubai",
            "timezone": "Asia/Dubai",
          },
        ],
        "KEY_DISPLAY_24HR_TIME": true,
        "KEY_DISPLAY_SECONDS": false,
        "KEY_HOME": Object {
          "country": "United Arab Emirates",
          "name": "Dubai",
          "timezone": "Asia/Dubai",
        },
      }
    `);
  });
});
