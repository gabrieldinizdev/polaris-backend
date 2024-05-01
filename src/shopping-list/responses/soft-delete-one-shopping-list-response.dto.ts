import { ApiProperty } from '@nestjs/swagger';

import { DataShoppingListResponseDTO } from './data-response.dto';

export class SoftDeleteOneShoppingListResponseDTO {
  @ApiProperty({
    type: DataShoppingListResponseDTO,
  })
  public readonly data: DataShoppingListResponseDTO;
}
