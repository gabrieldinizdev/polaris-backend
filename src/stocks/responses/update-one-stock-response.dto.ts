import { ApiProperty, OmitType } from '@nestjs/swagger';

import { DataStockResponseDTO } from './data-response.dto';

class UpdatedOneStockResponseDTO extends OmitType(DataStockResponseDTO, [
  'deletedAt',
] as const) {}

export class UpdateOneStockResponseDTO {
  @ApiProperty({
    type: UpdatedOneStockResponseDTO,
  })
  public readonly data: UpdatedOneStockResponseDTO;
}
