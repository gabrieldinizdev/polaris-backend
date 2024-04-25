import { ApiPropertyOptional } from '@nestjs/swagger';

import { Type } from 'class-transformer';
import { IsInt, IsOptional, Max, Min } from 'class-validator';

export class PaginationOptionsDTO {
  @ApiPropertyOptional({
    minimum: 1,
    default: 1,
    description: 'Current page',
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  public readonly page?: number = 1;

  @ApiPropertyOptional({
    description: 'How many items per page',
    minimum: 1,
    maximum: 100,
    default: 5,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  @IsOptional()
  public readonly size?: number = 10;
}
