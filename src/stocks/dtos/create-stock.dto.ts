import { PickType } from '@nestjs/swagger';

import { StockDTO } from './stock.dto';

export class CreateStockDTO extends PickType(StockDTO, ['name']) {}
