import { actions, actionTypes } from './address.actions';
import { getters, getterTypes } from './address.getters';
import { mutations } from './address.mutations';
import { initialState } from './address.state';

// -------------------------------------------------------------------------
// Export Types & Interfaces
// -------------------------------------------------------------------------

export * from './address.state';

// -------------------------------------------------------------------------
// Define Namespace, Actions & Getters
// -------------------------------------------------------------------------

export const AddressNamespace = 'address';

export const AddressActions = {
  GetAddresses: `${AddressNamespace}/${actionTypes.GET_ADDRESSES}`,
  CreateAddress: `${AddressNamespace}/${actionTypes.CREATE_ADDRESS}`,
  DeleteAddress: `${AddressNamespace}/${actionTypes.DELETE_ADDRESS}`,
};

export const AddressGetters = {
  Addresses: `${AddressNamespace}/${getterTypes.ADDRESSES}`,
};

// -------------------------------------------------------------------------
// Export Store
// -------------------------------------------------------------------------

export const address = {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
