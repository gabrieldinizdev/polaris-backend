import { ApiProperty, OmitType, PickType } from '@nestjs/swagger';

import { ProductDTO } from '@/products/dtos';
import { StockItemDTO } from '@/stock-items/dtos';

import { DataStockResponseDTO } from './data-response.dto';

class DataProductStockItemResponseDTO extends PickType(ProductDTO, ['name']) {}

class DataStockItemResponseDTO extends OmitType(StockItemDTO, ['product']) {
  @ApiProperty({
    type: DataProductStockItemResponseDTO,
  })
  public readonly product: DataProductStockItemResponseDTO;
}

class DataStockWithItemsResponseDTO extends DataStockResponseDTO {
  @ApiProperty({
    type: DataStockItemResponseDTO,
    isArray: true,
  })
  public readonly items: DataStockItemResponseDTO[];
}

export class FindOneStockWithItemsOkResponseDTO {
  @ApiProperty({
    type: DataStockWithItemsResponseDTO,
  })
  public readonly data: DataStockWithItemsResponseDTO;
}
