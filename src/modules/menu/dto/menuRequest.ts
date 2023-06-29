import { LargeNumberLike } from "crypto";

export class MenuRequest {
  storeId: number;
  name: string;
  price: number;
  userId: number;
  constructor(storeId: number, name: string, price: number, userId: number) {
    this.storeId = storeId;
    this.name = name;
    this.price = price;
    this.userId = userId;
  }
}