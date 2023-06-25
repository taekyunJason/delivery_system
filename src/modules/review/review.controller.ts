import { Controller, Get } from '@nestjs/common';
import { ReviewDto } from './dto/reviewDto';
import { Review } from './review.entity';

@Controller('review')
export class ReviewController {
  @Get()
  getReview(): ReviewDto {
    const reviewDto = new ReviewDto();
    return reviewDto;
  }

}