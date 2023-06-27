import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DeliveryController } from "./delivery.controller";
import { Delivery } from "./delivery.entity";
import { DeliveryRepository } from "./delivery.repository";
import { DeliveryService } from "./delivery.service";


@Module({
  imports: [TypeOrmModule.forFeature([Delivery]),],
  controllers: [DeliveryController],
  providers: [DeliveryService, DeliveryRepository],
})
export class DeliveryModule { };