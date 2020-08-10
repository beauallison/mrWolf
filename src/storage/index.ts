import ICity from '../ICity';
import * as BrowserStorage from './browserStorage';
import * as LocalStorage from './localStorage';
import { isExtension } from './isExtension';

const Storage = isExtension() ? BrowserStorage : LocalStorage;

const KEY_HOME = 'KEY_HOME';
const KEY_CITIES = 'KEY_CITIES';
const KEY_DISPLAY_24HR_TIME = 'KEY_DISPLAY_24HR_TIME';
const KEY_DISPLAY_SECONDS = 'KEY_DISPLAY_SECONDS';

export const saveHome = (home: ICity) => Storage.saveItem(KEY_HOME, home);
export const getHome = () => Storage.getItem(KEY_HOME) as ICity;

export const saveCities = (cities: ICity[]) => Storage.saveItem(KEY_CITIES, cities);
export const getCities = () => Storage.getItem(KEY_CITIES) as ICity[];

export const saveDisplay24HrTime = (display: boolean) => Storage.saveItem(KEY_DISPLAY_24HR_TIME, display);
export const getDisplay24HrTime = () => Storage.getItem(KEY_DISPLAY_24HR_TIME) as boolean;

export const saveDisplaySeconds = (display: boolean) => Storage.saveItem(KEY_DISPLAY_SECONDS, display);
export const getDisplaySeconds = () => Storage.getItem(KEY_DISPLAY_SECONDS) as boolean;

export const getAll = () => Storage.getAll([KEY_HOME, KEY_CITIES, KEY_DISPLAY_24HR_TIME, KEY_DISPLAY_SECONDS]);
