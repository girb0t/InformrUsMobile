import {
  STREET_INPUT_CHANGED,
  CITY_INPUT_CHANGED,
  STATE_INPUT_CHANGED,
  ZIP_INPUT_CHANGED
} from './types';

export const streetInputChanged = (street) => {
  return {
    type: STREET_INPUT_CHANGED,
    payload: street
  };
};

export const cityInputChanged = (city) => {
  return {
    type: CITY_INPUT_CHANGED,
    payload: city
  };
};

export const stateInputChanged = (stateInput) => {
  return {
    type: STATE_INPUT_CHANGED,
    payload: stateInput
  };
};

export const zipInputChanged = (zipCode) => {
  return {
    type: ZIP_INPUT_CHANGED,
    payload: zipCode
  };
};
