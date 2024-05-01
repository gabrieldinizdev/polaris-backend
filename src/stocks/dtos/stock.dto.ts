import { ApiProperty } from '@nestjs/swagger';

import { IsNotEmpty, IsString } from 'class-validator';

import { CommonFieldsDTO } from '@/shared/dtos/common';

export class StockDTO extends CommonFieldsDTO {
  @ApiProperty({
    description: 'Stock name',
    example: 'Main stock',
  })
  @IsString()
  @IsNotEmpty()
  public readonly name: string;
}
