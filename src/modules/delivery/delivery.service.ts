import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { Delivery } from "./delivery.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { DeliveryRepository } from "./delivery.repository";

@Injectable()
export class DeliveryService {
  constructor(
    @InjectRepository(Delivery) private deliveryRepsitory: DeliveryRepository;
  ) { }

}