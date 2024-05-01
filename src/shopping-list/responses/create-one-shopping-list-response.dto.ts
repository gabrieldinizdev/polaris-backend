import { ApiProperty, OmitType } from '@nestjs/swagger';

import { DataShoppingListResponseDTO } from './data-response.dto';

class CreatedOneShoppingListResponseDTO extends OmitType(
  DataShoppingListResponseDTO,
  ['deletedAt'] as const,
) {}

export class CreateOneShoppingListResponseDTO {
  @ApiProperty({
    type: CreatedOneShoppingListResponseDTO,
  })
  public readonly data: CreatedOneShoppingListResponseDTO;
}
