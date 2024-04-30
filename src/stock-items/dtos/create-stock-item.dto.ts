import { PickType } from '@nestjs/swagger';

import { StockItemDTO } from './stock-item.dto';

export class CreateStockItemDTO extends PickType(StockItemDTO, [
  'product',
  'stock',
  'quantity',
] as const) {}
