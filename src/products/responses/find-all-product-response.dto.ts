import { ApiProperty } from '@nestjs/swagger';

import { PaginationMetaDTO } from '@/shared/dtos/pagination';

import { DataResponseDTO } from './data-response.dto';

export class FindAllProductsOkResponseDTO {
  @ApiProperty({
    type: DataResponseDTO,
    isArray: true,
  })
  public readonly data: DataResponseDTO[];

  @ApiProperty()
  public readonly meta: PaginationMetaDTO;

  public constructor(data: Partial<FindAllProductsOkResponseDTO>) {
    Object.assign(this, data);
  }
}
