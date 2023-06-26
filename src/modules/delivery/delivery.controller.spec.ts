import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryController, getOwnerSignin } from './delivery.controller';
import { DeliveryService } from './delivery.service';

describe('DeliveryController', () => {
  let deliveryController: DeliveryController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DeliveryController],
      providers: [DeliveryService],
    }).compile();

    deliveryController = app.get<DeliveryController>(DeliveryController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(deliveryController.getHello()).toBe('Hello World!');
    });
  });

  // 사장님 회원가입
  // 1. 필수값 (아이디/비밀번호/이름/이메일/전화번호/기본주소)을 모두 입력해야 통과
  describe('User', () => {
    it('User SignUp returns the correct user object after registration', () => {
      const expectedUser = {
        id: 'jason11',
        email: 'jason@gmail.com',
      };

      const registeredUser = getOwnerSignin();

      expect(registeredUser).toEqual(expectedUser);
    });
  });

  // 장바구니 추가
  describe('Cart', () => {
    it('able Shopping Cart', () => {
      expect(1).toBe(1);
    });
  });
});
