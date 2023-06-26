import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReviewController } from './modules/review/review.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Delivery } from './modules/delivery/delivery.entity';
import { ReviewModule } from './modules/review/review.module';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { Review } from './modules/review/review.entity';

const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: ':memory:',
  entities: [Review, Delivery],
  synchronize: true,
}

@Module({
  imports: [ReviewModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController, ReviewController],
  providers: [AppService],
})
export class AppModule { }
