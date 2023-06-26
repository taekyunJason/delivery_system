import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { getOwnerSignin } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});

// 사장님 회원가입
// 필수값 (아이디/비밀번호/이름/이메일/전화번호/기본주소)을 모두 입력해야 통과
describe('User Registration', () => {
  it('returns the correct user object after registration', () => {
    const expectedUser = {
      id: 'jason11',
      email: 'jason@gmail.com',
    };

    const registeredUser = getOwnerSignin();

    expect(registeredUser).toEqual(expectedUser);
  });
});
