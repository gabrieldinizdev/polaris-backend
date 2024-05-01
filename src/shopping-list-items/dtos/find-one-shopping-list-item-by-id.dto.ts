import { ApiProperty } from '@nestjs/swagger';

export class FindOneShoppingListItemByIdDTO {
  @ApiProperty({
    example: '662875d4f0b11a3a17533d66',
    description: 'The id of the shopping list',
  })
  public readonly id: string;
}
