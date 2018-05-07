import { Address } from '@/app/models/Address';
import { AddressState } from './address.state';

// -------------------------------------------------------------------------
// Define Getter Types
// -------------------------------------------------------------------------

export const getterTypes = {
  ADDRESSES: 'ADDRESSES',
};

// -------------------------------------------------------------------------
// Define Getter Object
// -------------------------------------------------------------------------

export const getters = {
  [getterTypes.ADDRESSES](state: AddressState): Address[] {
    return state.addresses;
  },
};
