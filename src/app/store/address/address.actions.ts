import { ActionContext, ActionTree } from 'vuex';

import { Address } from '../../models/Address';

import * as addressApi from '@/app/services/api/address.api';
import * as mutationTypes from './address.mutations.types';
import { AddressState } from './address.state';

// -------------------------------------------------------------------------
// Define Types & Interfaces
// -------------------------------------------------------------------------

// -------------------------------------------------------------------------
// Define Action Types
// -------------------------------------------------------------------------

export const actionTypes = {
  GET_ADDRESSES: 'GET_ADDRESSES',
  CREATE_ADDRESS: 'CREATE_ADDRESS',
  DELETE_ADDRESS: 'DELETE_ADDRESS',
};

// -------------------------------------------------------------------------
// Define Action Object
// -------------------------------------------------------------------------

export const actions: ActionTree<AddressState, AddressState> = {
  // Get addresses
  [actionTypes.GET_ADDRESSES]({ commit, state }: ActionContext<AddressState, AddressState>): void {
    commit(mutationTypes.GET_ADDRESSES_REQUESTED);
    addressApi.getAddresses()
      .then((addresses: Address[]) => commit(mutationTypes.GET_ADDRESSES_SUCCESS, addresses))
      .catch((err: any) => commit(mutationTypes.GET_ADDRESSES_FAILED, err));
  },

  // Create new address
  [actionTypes.CREATE_ADDRESS]({ commit, dispatch, state }: ActionContext<AddressState, AddressState>, address: Address): void {
    commit(mutationTypes.CREATE_ADDRESS_REQUESTED);
    addressApi.saveAddress(address)
      .then((newAddress: Address) => {
        commit(mutationTypes.CREATE_ADDRESS_SUCCESS);
        dispatch(actionTypes.GET_ADDRESSES);
      })
      .catch((err: any) => commit(mutationTypes.GET_ADDRESSES_FAILED, err));
  },

  // Delete address
  [actionTypes.DELETE_ADDRESS]({ commit, dispatch, state }: ActionContext<AddressState, AddressState>, id: string): void {
    commit(mutationTypes.DELETE_ADDRESS_REQUESTED);
    addressApi.deleteAddress(id)
      .then(() => {
        commit(mutationTypes.DELETE_ADDRESS_SUCCESS);
        dispatch(actionTypes.GET_ADDRESSES);
      })
      .catch((err: any) => commit(mutationTypes.DELETE_ADDRESS_FAILED, err));
  },
};
