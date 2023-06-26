import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

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

  // 사장님 회원가입
  // 필수값 (아이디/비밀번호/이름/이메일/전화번호/기본주소)을 모두 입력해야 통과
  describe('owner_signin', () => {
    it('should done successful signin', () => {
      expect(appController.getOwnerSignin()).toBe('');
    });
  });
});
