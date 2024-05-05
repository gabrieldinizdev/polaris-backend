import { ApiProperty, OmitType, PickType } from '@nestjs/swagger';

import { ProductDTO } from '@/products/dtos';
import { ShoppingListItemDTO } from '@/shopping-list-items/dtos';

import { DataShoppingListResponseDTO } from './data-response.dto';

class DataProductShoppingListItemResponseDTO extends PickType(ProductDTO, [
  'name',
]) {}

class DataShoppingListItemResponseDTO extends OmitType(ShoppingListItemDTO, [
  'product',
]) {
  @ApiProperty({
    type: DataProductShoppingListItemResponseDTO,
  })
  public readonly product: DataProductShoppingListItemResponseDTO;
}

class DataShoppingListWithItemsResponseDTO extends DataShoppingListResponseDTO {
  @ApiProperty({
    type: DataShoppingListItemResponseDTO,
    isArray: true,
  })
  public readonly items: DataShoppingListItemResponseDTO[];
}

export class FindOneStockWithItemsOkResponseDTO {
  @ApiProperty({
    type: DataShoppingListWithItemsResponseDTO,
  })
  public readonly data: DataShoppingListWithItemsResponseDTO;
}
