import { ApiProperty } from '@nestjs/swagger';

import { DataStockItemResponseDTO } from './data-response.dto';

export class DeleteOneStockItemResponseDTO {
  @ApiProperty({
    type: DataStockItemResponseDTO,
  })
  public readonly data: DataStockItemResponseDTO;
}
