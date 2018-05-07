import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class Address {

  @Expose()
  public id: string;

  @Expose()
  public firstName: string;

  @Expose()
  public lastName: string;

  @Expose()
  public email: string;

  @Expose()
  public zipCode: string;

  @Expose()
  public location: string;

  public getFullLocation(): string {
    return `${this.zipCode} ${this.location}`;
  }

}
