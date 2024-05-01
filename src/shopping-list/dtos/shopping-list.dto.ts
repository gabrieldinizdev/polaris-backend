import { ApiProperty } from '@nestjs/swagger';

import { IsNotEmpty, IsString } from 'class-validator';

import { CommonFieldsDTO } from '@/shared/dtos/common';

export class ShoppingListDTO extends CommonFieldsDTO {
  @ApiProperty({
    description: 'Shopping List name',
    example: 'Lista - 2024/05',
  })
  @IsString()
  @IsNotEmpty()
  public readonly name: string;
}
