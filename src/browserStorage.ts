import ICity from './ICity';

const KEY_HOME = 'KEY_HOME';
const KEY_CITIES = 'KEY_CITIES';
const KEY_DISPLAY_24HR_TIME = 'KEY_DISPLAY_24HR_TIME';
const KEY_DISPLAY_SECONDS = 'KEY_DISPLAY_SECONDS';

const storageUnavailable = typeof browser === `undefined`;

const saveItem = (KEY: string, item: any) => {
  if (storageUnavailable) return;
  return browser.storage.local.set({ KEY: item });
};

export const retrieveItem = async (KEY: string) => {
  if (storageUnavailable) return;
  const item = await browser.storage.local.get(KEY);
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
  if (storageUnavailable) return;
  localStorage.clear();
};
