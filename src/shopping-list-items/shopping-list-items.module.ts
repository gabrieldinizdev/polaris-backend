import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ShoppingListItemDefinition } from './entities';
import { ShoppingListItemsController } from './shopping-list-items.controller';
import { ShoppingListItemsService } from './shopping-list-items.service';

@Module({
  imports: [MongooseModule.forFeature([ShoppingListItemDefinition])],
  providers: [ShoppingListItemsService],
  controllers: [ShoppingListItemsController],
})
export class ShoppingListItemsModule {}
