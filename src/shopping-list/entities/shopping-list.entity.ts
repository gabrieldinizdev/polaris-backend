import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

import { CommonFields } from '@/shared/entities';

@Schema({
  timestamps: true,
})
export class ShoppingList extends CommonFields {
  @Prop({
    type: String,
  })
  public readonly name: string;
}

export const ShoppingListSchema = SchemaFactory.createForClass(ShoppingList);

export const ShoppingListDefinition: ModelDefinition = {
  name: ShoppingList.name,
  schema: ShoppingListSchema,
};

export type ShoppingListDocument = HydratedDocument<ShoppingList>;
