import { PickType } from '@nestjs/swagger';

import { ProductDTO } from './product.dto';

export class CreateProductDTO extends PickType(ProductDTO, ['name', 'sku']) {}
