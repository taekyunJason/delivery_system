import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { Review } from "./review.entity";
import { Repository } from "typeorm";
import { OrderDeliveryDto } from "./dto/orderDeliveryDto";
import { ReviewDto } from "./dto/reviewDto";
import { InjectRepository } from "@nestjs/typeorm";
import { ReviewRepository } from "./review.repository";

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review) private reviewRepository: ReviewRepository,
  ) { }

  async findOneById(id: number): Promise<Review> {
    // let review: Review = null;
    const review = await this.reviewRepository.findOneReview(id);
    return review;
  }

  async createReview(orderId: number, userId: number, content: string) {
    let resultCode = 1000;
    const orderDeliveryDto =
      await this.reviewRepository.findOrderForReview(orderId);
    if (orderDeliveryDto.deliveryTime == null) {
      resultCode = 2000;
    };

    const now = new Date();
    // if (orderDeliveryDto.deliveryTime <= (now.getTime - 24 * 60 * 60 * 1000))

  }

}