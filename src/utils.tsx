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
  displaySeconds?: boolean;
}

export const generateTime = (props: IGenerateTime) => {
  const format = props.displaySeconds ? 'HH:MM:ss' : 'HH:MM';
  return moment().tz(props.timezone).format(format);
};
