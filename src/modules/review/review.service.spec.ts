import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken, TypeOrmModule } from "@nestjs/typeorm";
import { Review } from "./review.entity";
import { ReviewService } from "./review.service";

const mockData = {

  reviews: [
    { id: 1, content: "this is review test1.", orderId: 1, userId: 1 },
    { id: 2, content: "this is review test2.", orderId: 2, userId: 2 }
  ],
  orderDeliveryDtos: [
    { id: 1, deliveryTime: new Date() },
    { id: 2, deliveryTime: new Date() },
    { id: 3, deliveryTime: null }
  ]
}

class MockRepostiory {
  async findOneReview(id) {
    const review: Review = new Review();
    review.id = 0;
    mockData.reviews.forEach(function (value: Review) {
      console.log(value.id);
      if (value.id == id) review.id = value.id;
    });
    return review;
  }
}

describe("ReviewService", () => {
  let reviewService: ReviewService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReviewService,
        {
          provide: getRepositoryToken(Review),
          useClass: MockRepostiory,
        },
      ],
    }).compile();
    reviewService = module.get<ReviewService>(ReviewService);
  });

  describe("findReview", () => {
    const reviewId = 1;
    it("존재하는 아이디를 리턴하는지 확인", async () => {
      // const result: Review = new Review();
      // result.id = reviewId;
      const result = await reviewService.findOneById(reviewId);
      expect(result.id).toBe(reviewId);
    })
  })

})