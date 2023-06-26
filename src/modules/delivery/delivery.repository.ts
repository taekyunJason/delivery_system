import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from "typeorm";
import { Delivery } from "./delivery.entity";

@Injectable()
export class DeliveryRepository {
  constructor(@InjectRepository(Delivery) private deliveryModel: Repository<Delivery>) { }

  async findDeliveryByOrderId(orderId: number): Promise<Delivery> {
    const deliveryfound = await this.deliveryModel.find({ where: { orderId } });
    return deliveryfound[0];
  }

}