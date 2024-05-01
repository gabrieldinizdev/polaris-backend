import { ApiProperty } from '@nestjs/swagger';

import { DataStockItemResponseDTO } from './data-response.dto';

export class FindOneStockItemOkResponseDTO {
  @ApiProperty({
    type: DataStockItemResponseDTO,
  })
  public readonly data: DataStockItemResponseDTO;
}
