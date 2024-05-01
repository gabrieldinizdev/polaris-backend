import { ApiProperty } from '@nestjs/swagger';

import { IsNotEmpty, IsString } from 'class-validator';

export class CreateShoppingListDTO {
  @ApiProperty({
    description: 'Shopping List name',
    example: 'Lista - 2024/05',
  })
  @IsString()
  @IsNotEmpty()
  public readonly name: string;
}
