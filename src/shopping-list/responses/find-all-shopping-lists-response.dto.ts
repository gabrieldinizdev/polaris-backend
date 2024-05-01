import { ApiProperty } from '@nestjs/swagger';

import { PaginationMetaDTO } from '@/shared/dtos/pagination';

import { DataShoppingListResponseDTO } from './data-response.dto';

export class FindAllShoppingListOkResponseDTO {
  @ApiProperty({
    type: DataShoppingListResponseDTO,
    isArray: true,
  })
  public readonly data: DataShoppingListResponseDTO[];

  @ApiProperty()
  public readonly meta: PaginationMetaDTO;

  public constructor(data: Partial<FindAllShoppingListOkResponseDTO>) {
    Object.assign(this, data);
  }
}
