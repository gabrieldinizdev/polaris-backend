import { ApiProperty, OmitType } from '@nestjs/swagger';

import { DataStockResponseDTO } from './data-response.dto';

class CreatedOneStockResponseDTO extends OmitType(DataStockResponseDTO, [
  'deletedAt',
] as const) {}

export class CreateOneStockResponseDTO {
  @ApiProperty({
    type: CreatedOneStockResponseDTO,
  })
  public readonly data: CreatedOneStockResponseDTO;
}
