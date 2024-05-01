import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { StockDefinition, StockItemDefinition } from './entities';
import { StocksController } from './stocks.controller';
import { StocksService } from './stocks.service';

@Module({
  imports: [MongooseModule.forFeature([StockDefinition, StockItemDefinition])],
  controllers: [StocksController],
  providers: [StocksService],
})
export class StocksModule {}
