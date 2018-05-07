import { Address } from '@/app/models/Address';

export interface AddressState {
  addresses: Address[];
  isFetching: boolean;
  error: any;
}

export const initialState: AddressState = {
  addresses: [],
  isFetching: false,
  error: undefined,
};
