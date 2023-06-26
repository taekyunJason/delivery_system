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

function getOwnerSignin(): User {
  const newUser: User = {
    id: 'jason11',
    email: 'jason@gmail.com',
  };

  return newUser;
}
export { getOwnerSignin };
