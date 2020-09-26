import _ from 'lodash';
import Cities from './data/cities.json';
import Countries from './data/countries.json';
import ICity from './ICity';
import moment from 'moment-timezone';

export const citiesList = (): ICity[] =>
  Cities.map((city: any) => {
    const { code } = city;
    const country = _.find(Countries, { code });
    return {
      name: city.name,
      timezone: city.tz,
      country: country && country.name,
    } as ICity;
  });

export interface IGenerateTime {
  timezone: string;
  display24HourTime?: boolean;
  displaySeconds?: boolean;
  displayPeriod?: boolean;
}

export const generateTime = (props: IGenerateTime) => {
  const hourFormat = props.display24HourTime ? 'HH:mm' : 'h:mm';
  const periodFormat = props.displayPeriod && !props.display24HourTime ? `${hourFormat}a` : hourFormat;
  const format = props.displaySeconds ? `${hourFormat}:ss ` : periodFormat;
  return moment().tz(props.timezone).format(format);
};
