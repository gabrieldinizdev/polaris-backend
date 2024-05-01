import { ApiProperty } from '@nestjs/swagger';

import { PaginationMetaDTO } from '@/shared/dtos/pagination';

import { DataStockItemResponseDTO } from './data-response.dto';

export class FindAllStockItemsOkResponseDTO {
  @ApiProperty({
    type: DataStockItemResponseDTO,
    isArray: true,
  })
  public readonly data: DataStockItemResponseDTO[];

  @ApiProperty()
  public readonly meta: PaginationMetaDTO;

  public constructor(data: Partial<FindAllStockItemsOkResponseDTO>) {
    Object.assign(this, data);
  }
}
