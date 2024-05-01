import { ApiProperty } from '@nestjs/swagger';

import { PaginationMetaDTO } from '@/shared/dtos/pagination';

import { DataShoppingListItemResponseDTO } from './data-response.dto';

export class FindAllShoppingListItemsOkResponseDTO {
  @ApiProperty({
    type: DataShoppingListItemResponseDTO,
    isArray: true,
  })
  public readonly data: DataShoppingListItemResponseDTO[];

  @ApiProperty()
  public readonly meta: PaginationMetaDTO;

  public constructor(data: Partial<FindAllShoppingListItemsOkResponseDTO>) {
    Object.assign(this, data);
  }
}
