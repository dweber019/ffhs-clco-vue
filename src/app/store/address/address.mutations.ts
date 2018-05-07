import Vue from 'vue';
import { MutationTree } from 'vuex';

import { Address } from '@/app/models/Address';
import * as mutationTypes from './address.mutations.types';
import { AddressState } from './address.state';

export const mutations: MutationTree<AddressState> = {
  // GET_ADDRESSES
  [mutationTypes.GET_ADDRESSES_REQUESTED](state: AddressState): void {
    state.isFetching = true;
    state.error = undefined;
  },
  [mutationTypes.GET_ADDRESSES_SUCCESS](state: AddressState, addresses: Address[]): void {
    state.addresses = addresses;
    state.isFetching = false;
    state.error = undefined;
  },
  [mutationTypes.GET_ADDRESSES_FAILED](state: AddressState, error: any): void {
    state.isFetching = false;
    state.error = error;
  },

  // CREATE_ADDRESS
  [mutationTypes.CREATE_ADDRESS_REQUESTED](state: AddressState): void {
    state.isFetching = true;
    state.error = undefined;
  },
  [mutationTypes.CREATE_ADDRESS_SUCCESS](state: AddressState): void {
    state.isFetching = false;
    state.error = undefined;
  },
  [mutationTypes.CREATE_ADDRESS_FAILED](state: AddressState, error: any): void {
    state.isFetching = false;
    state.error = error;
  },

  // DELETE_ADDRESS
  [mutationTypes.DELETE_ADDRESS_REQUESTED](state: AddressState): void {
    state.isFetching = true;
    state.error = undefined;
  },
  [mutationTypes.DELETE_ADDRESS_SUCCESS](state: AddressState): void {
    state.isFetching = false;
    state.error = undefined;
  },
  [mutationTypes.DELETE_ADDRESS_FAILED](state: AddressState, error: any): void {
    state.isFetching = false;
    state.error = error;
  },

};
