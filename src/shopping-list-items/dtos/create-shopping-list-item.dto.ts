import { PickType } from '@nestjs/swagger';

import { ShoppingListItemDTO } from './shopping-list-item.dto';

export class CreateShoppingListItemDTO extends PickType(ShoppingListItemDTO, [
  'product',
  'list',
  'quantity',
] as const) {}
