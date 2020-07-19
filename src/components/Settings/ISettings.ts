import ICity from '../../ICity';

export default interface ISettings {
  home: ICity;
  setHome: void;
  cities: ICity[];
  setCities: void;
  display24HourTime: boolean;
  setDisplay24HourTime: void;
  displaySeconds: boolean;
  setDisplaySeconds: void;
}
