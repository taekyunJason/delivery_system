import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface User {
  id: string;
  email: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
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
