import { ApiProperty } from '@nestjs/swagger';

export class FindOneStockItemByIdDTO {
  @ApiProperty({
    example: '662875d4f0b11a3a17533d66',
    description: 'The id of the stock',
  })
  public readonly id: string;
}
