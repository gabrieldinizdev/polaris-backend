import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

import { CommonFields } from '@/shared/entities';

@Schema({
  timestamps: true,
  virtuals: true,
  id: false,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Stock extends CommonFields {
  @Prop({
    type: String,
  })
  public readonly name: string;
}

export const StockSchema = SchemaFactory.createForClass(Stock);

export const StockDefinition: ModelDefinition = {
  name: Stock.name,
  schema: StockSchema,
};

export type StockDocument = HydratedDocument<Stock>;
