import { ApiProperty, OmitType } from '@nestjs/swagger';

import { DataShoppingListResponseDTO } from './data-response.dto';

class UpdatedOneShoppingListResponseDTO extends OmitType(
  DataShoppingListResponseDTO,
  ['deletedAt'] as const,
) {}

export class UpdateOneShoppingListResponseDTO {
  @ApiProperty({
    type: UpdatedOneShoppingListResponseDTO,
  })
  public readonly data: UpdatedOneShoppingListResponseDTO;
}
