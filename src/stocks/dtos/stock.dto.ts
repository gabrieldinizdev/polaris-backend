import { ApiProperty } from '@nestjs/swagger';

import { IsArray, IsInstance, IsNotEmpty, IsString } from 'class-validator';

import { CommonFieldsDTO } from '@/shared/dtos/common';

import { StockItemDTO } from './stock-item.dto';

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
  @IsInstance(StockItemDTO, { each: true })
  public readonly items: StockItemDTO[];
}
