import { ApiProperty, OmitType } from '@nestjs/swagger';

import { DataStockItemResponseDTO } from './data-response.dto';

class CreatedOneStockItemResponseDTO extends OmitType(
  DataStockItemResponseDTO,
  ['deletedAt'] as const,
) {}

export class CreateOneStockItemResponseDTO {
  @ApiProperty({
    type: CreatedOneStockItemResponseDTO,
  })
  public readonly data: CreatedOneStockItemResponseDTO;
}
