import { Controller, Get } from '@nestjs/common';
import { DeliveryService } from './delivery.service';

interface User {
  id: string;
  email: string;
}

@Controller()
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Get()
  getHello(): string {
    return this.deliveryService.getHello();
  }
}
