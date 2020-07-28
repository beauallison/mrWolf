import ICity from './ICity';

const KEY_HOME = 'KEY_HOME';
const KEY_CITIES = 'KEY_CITIES';
const KEY_DISPLAY_24HR_TIME = 'KEY_DISPLAY_24HR_TIME';
const KEY_DISPLAY_SECONDS = 'KEY_DISPLAY_SECONDS';

const localeStorageUnavailable = typeof window === `undefined`;

const saveItem = (KEY: string, item: any) => {
  if (localeStorageUnavailable) return;
  localStorage.setItem(KEY, JSON.stringify(item));
};

export const retrieveItem = (KEY: string) => {
  if (localeStorageUnavailable) return;
  const item = localStorage.getItem(KEY);
  if (!item) return null;
  return JSON.parse(item);
};

export const saveHome = (home: ICity) => saveItem(KEY_HOME, home);
export const retrieveHome = () => retrieveItem(KEY_HOME) as ICity;

export const saveCities = (cities: ICity[]) => saveItem(KEY_CITIES, cities);
export const retrieveCities = () => retrieveItem(KEY_CITIES) as ICity[];

export const saveDisplay24HrTime = (display: boolean) => saveItem(KEY_DISPLAY_24HR_TIME, display);
export const retrieveDisplay24HrTime = () => retrieveItem(KEY_DISPLAY_24HR_TIME) as boolean;

export const saveDisplaySeconds = (display: boolean) => saveItem(KEY_DISPLAY_SECONDS, display);
export const retrieveDisplaySeconds = () => retrieveItem(KEY_DISPLAY_SECONDS) as boolean;

export const clearAll = () => {
  if (localeStorageUnavailable) return;
  localStorage.clear();
};
