export class StoreRequest {
  userId: number;
  name: string;
  phoneNumber: string;
  address: string;
  constructor(
    userId: number,
    name: string,
    phoneNumber: string,
    address: string,
  ) {
    this.userId = userId;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }
}