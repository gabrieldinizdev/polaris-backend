import { ApiProperty } from '@nestjs/swagger';

import { IsMongoId, IsNotEmpty, IsNumber } from 'class-validator';

import { CommonFieldsDTO } from '@/shared/dtos/common';

export class ShoppingListItemDTO extends CommonFieldsDTO {
  @ApiProperty({
    description: 'Quantity of products',
    example: 10,
  })
  @IsNumber()
  @IsNotEmpty()
  public readonly quantity: number;

  @ApiProperty({
    description: 'The Linked Product',
    type: String,
    example: '662875d4f0b11a3a17533d66',
  })
  @IsNotEmpty()
  @IsMongoId()
  public readonly product: string;

  @ApiProperty({
    description: 'The Linked Shopping List',
    type: String,
    example: '662875d4f0b11a3a17533d66',
  })
  @IsNotEmpty()
  @IsMongoId()
  public readonly list: string;
}
