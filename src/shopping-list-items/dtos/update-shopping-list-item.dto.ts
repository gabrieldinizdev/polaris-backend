import { OmitType, PartialType } from '@nestjs/swagger';

import { CreateShoppingListItemDTO } from './create-shopping-list-item.dto';

export class UpdateShoppingListItemDTO extends PartialType(
  OmitType(CreateShoppingListItemDTO, ['list'] as const),
) {}
