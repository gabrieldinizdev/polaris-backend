import { ApiProperty } from '@nestjs/swagger';

import { DataShoppingListItemResponseDTO } from './data-response.dto';

export class DeleteOneShoppingListItemResponseDTO {
  @ApiProperty({
    type: DataShoppingListItemResponseDTO,
  })
  public readonly data: DataShoppingListItemResponseDTO;
}
