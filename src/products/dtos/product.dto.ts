import { ApiProperty } from '@nestjs/swagger';

import { IsNotEmpty, IsString } from 'class-validator';

import { CommonFieldsDTO } from '@/shared/dtos/common';

export class ProductDTO extends CommonFieldsDTO {
  @ApiProperty({
    description: 'Product name',
    example: 'Café',
  })
  @IsString()
  @IsNotEmpty()
  public readonly name: string;

  @ApiProperty({
    description: 'Stock Keeping Unit',
    example: 'sku-123',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  public readonly sku: string;
}
