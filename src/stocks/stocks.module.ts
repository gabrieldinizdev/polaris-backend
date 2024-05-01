import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { StockDefinition } from './entities';
import { StocksController } from './stocks.controller';
import { StocksService } from './stocks.service';

@Module({
  imports: [MongooseModule.forFeature([StockDefinition])],
  controllers: [StocksController],
  providers: [StocksService],
})
export class StocksModule {}
