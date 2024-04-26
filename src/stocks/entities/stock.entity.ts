import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import mongoose, { HydratedDocument } from 'mongoose';

import { CommonFields } from '@/shared/entities';

import { StockItem } from './stock-item.entity';

@Schema({
  timestamps: true,
})
export class Stock extends CommonFields {
  @Prop({
    type: String,
  })
  public readonly name: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: StockItem.name }],
    default: [],
  })
  public readonly items: StockItem[];
}

export const StockSchema = SchemaFactory.createForClass(Stock);

export const StockDefinition: ModelDefinition = {
  name: Stock.name,
  schema: StockSchema,
};

export type StockDocument = HydratedDocument<Stock>;
