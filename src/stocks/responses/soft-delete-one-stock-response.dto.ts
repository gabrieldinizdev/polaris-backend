import { ApiProperty } from '@nestjs/swagger';

import { DataStockResponseDTO } from './data-response.dto';

export class SoftDeleteOneStockResponseDTO {
  @ApiProperty({
    type: DataStockResponseDTO,
  })
  public readonly data: DataStockResponseDTO;
}
