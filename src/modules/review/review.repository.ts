import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from "./review.entity";
import { Repository } from 'typeorm';
import { OrderDeliveryDto } from "./dto/orderDeliveryDto";

@Injectable()
export class ReviewRepository {
  constructor(@InjectRepository(Review) private review: Repository<Review>) { }
  // async findOne(id: number): Promise<Review> {
  //   const review = new Review();
  //   review.id = id;
  //   return review;
  // }

  // async findOneReview(reviewId: number): Promise<Review> {
  //   const result = await this.review.findOne({ where: { id: reviewId } });
  //   return result;
  // }

  async findOneReview(reviewId: number): Promise<Review> {
    return await this.review.findOne({ where: { id: reviewId } });
  }

  async findOrderForReview(orderId: number): Promise<OrderDeliveryDto> {
    return new OrderDeliveryDto();
  }
}