import { ApiProperty } from '@nestjs/swagger';

import { DataShoppingListResponseDTO } from './data-response.dto';

export class FindOneShoppingListOkResponseDTO {
  @ApiProperty({
    type: DataShoppingListResponseDTO,
  })
  public readonly data: DataShoppingListResponseDTO;
}
