import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { StockItemDefinition } from './entities';
import { StockItemsController } from './stock-items.controller';
import { StockItemsService } from './stock-items.service';

@Module({
  imports: [MongooseModule.forFeature([StockItemDefinition])],
  providers: [StockItemsService],
  controllers: [StockItemsController],
})
export class StockItemsModule {}
