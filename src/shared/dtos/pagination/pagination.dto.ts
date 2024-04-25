import { ApiProperty } from '@nestjs/swagger';

import { IsArray } from 'class-validator';

import { DataResponse } from '@/shared/interfaces/common';

import { PaginationMetaDTO } from './pagination-meta.dto';

export class PaginationDTO<Type> implements DataResponse<Type[]> {
  @IsArray()
  @ApiProperty({ isArray: true })
  public readonly data: Type[];

  @ApiProperty({ type: () => PaginationMetaDTO })
  public readonly meta: PaginationMetaDTO;

  public constructor(data: Type[], meta: PaginationMetaDTO) {
    this.data = data;
    this.meta = meta;
  }
}
