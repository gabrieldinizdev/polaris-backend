import { PartialType } from '@nestjs/swagger';

import { CreateStockDTO } from './create-stock.dto';

export class UpdateStockDTO extends PartialType(CreateStockDTO) {}
