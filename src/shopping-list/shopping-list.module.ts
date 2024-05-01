import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ShoppingListDefinition } from './entities';
import { ShoppingListController } from './shopping-list.controller';
import { ShoppingListService } from './shopping-list.service';

@Module({
  imports: [MongooseModule.forFeature([ShoppingListDefinition])],
  controllers: [ShoppingListController],
  providers: [ShoppingListService],
})
export class ShoppingListModule {}
