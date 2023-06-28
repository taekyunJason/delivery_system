import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StoreController } from "./store.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Store]),],
  controllers: [StoreController],
  providers: [StoreService, StoreRepository],
})

export class StoreModule { }