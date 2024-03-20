import { atom } from "recoil";

export const searchVal = atom({
    key: 'searchState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });

export const cityDetails = atom({
    key: 'cityState',
    default: {}
})