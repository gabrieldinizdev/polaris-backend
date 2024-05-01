import { ApiProperty } from '@nestjs/swagger';

export class FindOneProductByIdDTO {
  @ApiProperty({
    example: '662875d4f0b11a3a17533d66',
    description: 'The id of the product',
  })
  public readonly id: string;
}
