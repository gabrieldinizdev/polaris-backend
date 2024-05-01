import { OmitType, PartialType } from '@nestjs/swagger';

import { CreateStockItemDTO } from './create-stock-item.dto';

export class UpdateStockItemDTO extends PartialType(
  OmitType(CreateStockItemDTO, ['stock'] as const),
) {}
