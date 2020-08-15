import ICity from '../ICity';
import * as BrowserStorage from './browserStorage';
import * as LocalStorage from './localStorage';
import { isExtension } from './isExtension';

const Storage = isExtension() ? BrowserStorage : LocalStorage;

const KEY_HOME = 'KEY_HOME';
const KEY_CITIES = 'KEY_CITIES';
const KEY_DISPLAY_24HR_TIME = 'KEY_DISPLAY_24HR_TIME';
const KEY_DISPLAY_SECONDS = 'KEY_DISPLAY_SECONDS';
const KEY_DISPLAY_FONT_SIZE = 'KEY_DISPLAY_FONT_SIZE';
const KEY_COLOR_PALETTE = 'KEY_COLOR_PALETTE';
const KEY_COLOR_PRIMARY = 'KEY_COLOR_PRIMARY';
const KEY_COLOR_SECONDARY = 'KEY_COLOR_SECONDARY';

export const saveHome = (home: ICity) => Storage.saveItem(KEY_HOME, home);
export const getHome = () => Storage.getItem(KEY_HOME) as ICity;

export const saveCities = (cities: ICity[]) => Storage.saveItem(KEY_CITIES, cities);
export const getCities = () => Storage.getItem(KEY_CITIES) as ICity[];

export const saveDisplay24HrTime = (display: boolean) => Storage.saveItem(KEY_DISPLAY_24HR_TIME, display);
export const getDisplay24HrTime = () => Storage.getItem(KEY_DISPLAY_24HR_TIME) as boolean;

export const saveDisplaySeconds = (display: boolean) => Storage.saveItem(KEY_DISPLAY_SECONDS, display);
export const getDisplaySeconds = () => Storage.getItem(KEY_DISPLAY_SECONDS) as boolean;

export const saveDisplayFontSize = (fontSize: string) => Storage.saveItem(KEY_DISPLAY_FONT_SIZE, fontSize);
export const getDisplayFontSize = () => Storage.getItem(KEY_DISPLAY_FONT_SIZE) as boolean;

export const saveColorPalette = (palette: string) => Storage.saveItem(KEY_COLOR_PALETTE, palette);
export const getColorPalette = () => Storage.getItem(KEY_COLOR_PALETTE);

export const saveColorPrimary = (color: string) => Storage.saveItem(KEY_COLOR_PRIMARY, color);
export const getColorPrimary = () => Storage.getItem(KEY_COLOR_PRIMARY);

export const saveColorSecondary = (color: string) => Storage.saveItem(KEY_COLOR_SECONDARY, color);
export const getColorSecondary = () => Storage.getItem(KEY_COLOR_SECONDARY);

interface IGetAll {
  KEY_HOME: ICity;
  KEY_CITIES: ICity[];
  KEY_DISPLAY_24HR_TIME: boolean;
  KEY_DISPLAY_SECONDS: boolean;
  KEY_DISPLAY_FONT_SIZE: boolean;
  KEY_COLOR_PALETTE: string;
  KEY_COLOR_PRIMARY: string;
  KEY_COLOR_SECONDARY: string;
}

export const getAll = () =>
  Storage.getAll([
    KEY_HOME,
    KEY_CITIES,
    KEY_DISPLAY_24HR_TIME,
    KEY_DISPLAY_SECONDS,
    KEY_DISPLAY_FONT_SIZE,
    KEY_COLOR_PALETTE,
    KEY_COLOR_PRIMARY,
    KEY_COLOR_SECONDARY,
  ]) as IGetAll;
