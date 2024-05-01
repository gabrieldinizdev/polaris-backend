import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Type } from 'class-transformer';
import { HydratedDocument, Types } from 'mongoose';

import { Product } from '@/products/entities';
import { CommonFields } from '@/shared/entities';
import { Stock } from '@/stocks/entities';

@Schema({
  timestamps: true,
})
export class StockItem extends CommonFields {
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
    ref: 'Stock',
  })
  @Type(() => Stock)
  public readonly stock: Stock;
}

export const StockItemSchema = SchemaFactory.createForClass(StockItem);

export const StockItemDefinition: ModelDefinition = {
  name: StockItem.name,
  schema: StockItemSchema,
};

export type StockItemDocument = HydratedDocument<StockItem>;
