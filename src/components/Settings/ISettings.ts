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
  toggleDisplayFontSize: void;
  colorPrimary: string;
  colorSecondary: string;
  updateDisplayFontSize: void;
  updateColorPrimary: void;
  updateColorSecondary: void;
}
