import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductDefinition } from '@/products/entities';
import { StockDefinition } from '@/stocks/entities';

import { StockItemDefinition } from './entities';
import { StockItemsController } from './stock-items.controller';
import { StockItemsService } from './stock-items.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      ProductDefinition,
      StockDefinition,
      StockItemDefinition,
    ]),
  ],
  providers: [StockItemsService],
  controllers: [StockItemsController],
})
export class StockItemsModule {}
