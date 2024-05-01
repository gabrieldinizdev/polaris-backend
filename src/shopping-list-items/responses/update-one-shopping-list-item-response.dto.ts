import { ApiProperty, PickType } from '@nestjs/swagger';

import { DataShoppingListItemResponseDTO } from './data-response.dto';

class UpdatedOneShoppingListResponseDTO extends PickType(
  DataShoppingListItemResponseDTO,
  ['deletedAt'] as const,
) {}

export class UpdateOneShoppingListResponseDTO {
  @ApiProperty({
    type: UpdatedOneShoppingListResponseDTO,
  })
  public readonly data: UpdatedOneShoppingListResponseDTO;
}
