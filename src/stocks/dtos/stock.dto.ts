import { ApiProperty } from '@nestjs/swagger';

import { IsArray, IsMongoId, IsNotEmpty, IsString } from 'class-validator';

import { CommonFieldsDTO } from '@/shared/dtos/common';
import { StockItemDTO } from '@/stock-items/dtos';

export class StockDTO extends CommonFieldsDTO {
  @ApiProperty({
    description: 'Stock name',
    example: 'Main stock',
  })
  @IsString()
  @IsNotEmpty()
  public readonly name: string;

  @ApiProperty({
    description: 'Stock items',
    type: StockItemDTO,
    isArray: true,
  })
  @IsArray()
  @IsMongoId({ each: true })
  public readonly items: StockItemDTO[];
}
