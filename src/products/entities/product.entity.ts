import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import type { HydratedDocument } from 'mongoose';

import { CommonFields } from '@/shared/entities';

@Schema({
  timestamps: true,
})
export class Product extends CommonFields {
  @Prop({
    type: String,
    required: true,
  })
  public readonly name: string;

  @Prop({
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  })
  public readonly sku: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

ProductSchema.index({ sku: 'text' });

export const ProductDefinition: ModelDefinition = {
  name: Product.name,
  schema: ProductSchema,
};

export type ProductDocument = HydratedDocument<Product>;
