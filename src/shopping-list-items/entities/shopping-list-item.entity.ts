import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Type } from 'class-transformer';
import { HydratedDocument, Types } from 'mongoose';

import { Product } from '@/products/entities';
import { CommonFields } from '@/shared/entities';
import { ShoppingList } from '@/shopping-list/entities';

@Schema({
  timestamps: true,
})
export class ShoppingListItem extends CommonFields {
  @Prop({
    type: Number,
    required: true,
  })
  public readonly quantity: number;

  @Prop({
    type: Types.ObjectId,
    ref: 'Product',
  })
  @Type(() => Product)
  public readonly product: Product;

  @Prop({
    type: Types.ObjectId,
    ref: 'ShoppingList',
  })
  @Type(() => ShoppingList)
  public readonly list: ShoppingList;
}

export const ShoppingListItemSchema =
  SchemaFactory.createForClass(ShoppingListItem);

export const ShoppingListItemDefinition: ModelDefinition = {
  name: ShoppingListItem.name,
  schema: ShoppingListItemSchema,
};

export type ShoppingListItemDocument = HydratedDocument<ShoppingListItem>;
