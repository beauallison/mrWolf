import ICity from '../../ICity';

export default interface ISettings {
  home: ICity;
  setHome: Function;
  cities: ICity[];
  setCities: Function;
  display24HourTime: boolean;
  toggleDisplay24HourTime: Function;
  displaySeconds: boolean;
  toggleDisplaySeconds: Function;
  displayFontSize: number;
  updateDisplayFontSize: Function;
  colorPalette: string;
  updateColorPalette: Function;
  colorPrimary: string;
  updateColorPrimary: Function;
  colorSecondary: string;
  updateColorSecondary: Function;
  displayChecklist: boolean;
  toggleDisplayChecklist: Function;
}
