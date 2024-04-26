import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import mongoose, { HydratedDocument } from 'mongoose';

import { Product } from '@/products/entities';
import { CommonFields } from '@/shared/entities';

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
    type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Product.name,
      required: true,
    },
  })
  public readonly product: Product;
}

export const StockItemSchema = SchemaFactory.createForClass(StockItem);

export const StockItemDefinition: ModelDefinition = {
  name: StockItem.name,
  schema: StockItemSchema,
};

export type StockItemDocument = HydratedDocument<StockItem>;
