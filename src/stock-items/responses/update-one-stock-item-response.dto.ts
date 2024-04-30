import { ApiProperty, PickType } from '@nestjs/swagger';

import { DataStockItemResponseDTO } from './data-response.dto';

class UpdatedOneStockResponseDTO extends PickType(DataStockItemResponseDTO, [
  'deletedAt',
] as const) {}

export class UpdateOneStockResponseDTO {
  @ApiProperty({
    type: UpdatedOneStockResponseDTO,
  })
  public readonly data: UpdatedOneStockResponseDTO;
}
