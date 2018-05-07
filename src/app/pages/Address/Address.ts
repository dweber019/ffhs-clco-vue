import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

import { Address } from '@/app/models/Address';
import { AddressActions, AddressGetters } from '@/app/store/address';

@Component
export default class AddressComponent extends Vue {

  public newAddress: Address;

  private log = this.$createLogger('AddressComponent');
  private closeCollapse: () => void;

  @Getter(AddressGetters.Addresses)
  public addresses: Address[];

  @Action(AddressActions.GetAddresses)
  public getAddresses: () => void;

  @Action(AddressActions.CreateAddress)
  public createAddress: (address: Address) => void;

  @Action(AddressActions.DeleteAddress)
  public deleteAddress: (id: string) => void;

  public created(): void {
    this.getAddresses();
    this.resetAddress();
  }

  public async createNewAddress(): Promise<void> {
    this.log.info('createNewAddress', this.newAddress);

    const isValid = await this.$validator.validateAll();
    this.log.info('The form is valid?', isValid);

    if (isValid) {
      this.createAddress(this.newAddress);
      this.resetAddress();
    }
  }

  public onDeleteAddress(address: Address): void {
    this.log.info('deleteAddress', address);

    this.deleteAddress(address.id);
  }

  private resetAddress(): void {
    this.newAddress = new Address();
  }
}
