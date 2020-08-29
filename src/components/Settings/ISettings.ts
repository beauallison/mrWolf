import ICity from '../../ICity';

export default interface ISettings {
  home: ICity;
  setHome: void;
  cities: ICity[];
  setCities: void;
  display24HourTime: boolean;
  toggleDisplay24HourTime: void;
  displaySeconds: boolean;
  toggleDisplaySeconds: void;
  displayFontSize: boolean;
  updateDisplayFontSize: void;
  colorPalette: string;
  updateColorPalette: void;
  colorPrimary: string;
  updateColorPrimary: void;
  colorSecondary: string;
  updateColorSecondary: void;
  displayChecklist: boolean;
  toggleDisplayChecklist: void;
}
