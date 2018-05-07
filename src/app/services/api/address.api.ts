import Vue from 'vue';

import { classToPlain, plainToClass } from 'class-transformer';

import { Address } from '@/app/models/Address';

export async function getAddresses(): Promise<Address[]> {
  const response = await Vue.$http.get('/addresses');
  return plainToClass<Address, Address[]>(Address, response.data);
}

export async function saveAddress(address: Address): Promise<Address> {
  const response = await Vue.$http.post('/addresses', classToPlain(address));
  return plainToClass<Address, Address>(Address, response.data);
}

export async function deleteAddress(id: string): Promise<void> {
  await Vue.$http.delete(`/addresses/${id}`);
}
