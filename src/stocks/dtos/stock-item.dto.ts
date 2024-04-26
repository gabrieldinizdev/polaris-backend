import { ApiProperty } from '@nestjs/swagger';

import { IsInstance, IsNotEmpty, IsNumber } from 'class-validator';

import { ProductDTO } from '@/products/dtos';
import { CommonFieldsDTO } from '@/shared/dtos/common';

export class StockItemDTO extends CommonFieldsDTO {
  @ApiProperty({
    description: 'Quantity of products',
    example: 10,
  })
  @IsNumber()
  @IsNotEmpty()
  public readonly quantity: number;

  @ApiProperty({
    description: 'Product',
    type: ProductDTO,
  })
  @IsNotEmpty()
  @IsInstance(ProductDTO)
  public readonly product: ProductDTO;
}
