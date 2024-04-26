import { ApiProperty } from '@nestjs/swagger';

import { PaginationMetaDTO } from '@/shared/dtos/pagination';

import { DataStockResponseDTO } from './data-response.dto';

export class FindAllStocksOkResponseDTO {
  @ApiProperty({
    type: DataStockResponseDTO,
    isArray: true,
  })
  public readonly data: DataStockResponseDTO[];

  @ApiProperty()
  public readonly meta: PaginationMetaDTO;

  public constructor(data: Partial<FindAllStocksOkResponseDTO>) {
    Object.assign(this, data);
  }
}
