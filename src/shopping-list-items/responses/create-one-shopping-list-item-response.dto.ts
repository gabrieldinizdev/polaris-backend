import { ApiProperty, OmitType } from '@nestjs/swagger';

import { DataShoppingListItemResponseDTO } from './data-response.dto';

class CreatedOneShoppingListItemResponseDTO extends OmitType(
  DataShoppingListItemResponseDTO,
  ['deletedAt'] as const,
) {}

export class CreateOneShoppingListItemResponseDTO {
  @ApiProperty({
    type: CreatedOneShoppingListItemResponseDTO,
  })
  public readonly data: CreatedOneShoppingListItemResponseDTO;
}
