import { ApiProperty } from '@nestjs/swagger';

import { PaginationMetaDTO } from '@/shared/dtos/pagination';

import { DataProductResponseDTO } from './data-response.dto';

export class FindAllProductsOkResponseDTO {
  @ApiProperty({
    type: DataProductResponseDTO,
    isArray: true,
  })
  public readonly data: DataProductResponseDTO[];

  @ApiProperty()
  public readonly meta: PaginationMetaDTO;

  public constructor(data: Partial<FindAllProductsOkResponseDTO>) {
    Object.assign(this, data);
  }
}
