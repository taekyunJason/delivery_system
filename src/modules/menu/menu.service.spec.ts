import { BadRequestException } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { TypeOrmModule } from "@nestjs/typeorm";


const mockData = {
  stores: [
    {
      id: 1,
      userId: 1,
      name: 'testStore',
      phoneNumber: '010-1234-5678',
      address: '서울시 강남구 역삼동'
    },
    {
      id: 2,
      userId: 2,
      name: 'testStore',
      phoneNumber: '010-1234-5678',
      address: '서울시 종로구 명동'
    },
  ],

  storeRequest: {
    userId: 1,
    name: 'testStore',
    phoneNumber: '010-1234-5678',
    address: '서울시 강남구 역삼동'
  }
}


// describe('MenuService', () => {
//   let storeRepository: MenuRepository;
//   let storeService: MenuService;
//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       imports: [
//         TypeOrmModule.forFeature([Store]),
//         TypeOrmModule.forRoot({
//           type: 'sqlite',
//           database: ':memory:',
//           entities: [Store],
//           synchronize: true,
//         }),
//       ],
//       providers: [StoreRepository, StoreService],
//     }).compile();
//     storeService = module.get<StoreService>(StoreService);
//     storeRepository = module.get<StoreRepository>(StoreRepository);
//   });

//   describe('validateStoreRequest', () => {
//     it('사장님이 이미 등록한 가게가 존재하는지 확인', async () => {
//       jest
//         .spyOn(storeRepository, 'findStoreByUserId')
//         .mockResolvedValue(mockData.stores);
//       await expect(
//         storeService.validateStoreRequest(mockData.storeRequest),
//       ).rejects.toThrowError(
//         new BadRequestException('해당 아이디로 등록한 가게가 존재합니다.'),
//       );
//     })
//   });

// });