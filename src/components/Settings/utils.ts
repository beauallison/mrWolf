import * as utils from '../../utils';
import ICity from '../../ICity';

// Used specifically for React Select
export interface IValue {
  value: string;
  label: string;
  city: ICity;
}

// City to Value
export const cityToValue = (city: ICity) => {
  const nameAndCountry = `${city.name}, ${city.country}`;

  return {
    value: nameAndCountry,
    label: nameAndCountry,
    city,
  } as IValue;
};

export const citiesToValues = (cities: ICity[]) => cities.map((city) => cityToValue(city));

export const generateOptions = () => citiesToValues(utils.citiesList());

// Value to City
export const valueToCity = ({ city }: IValue) => city as ICity;
export const valuesToCities = (values: IValue[]) => values.map((value) => valueToCity(value));
