import { ApiProperty } from '@nestjs/swagger';

import { DataResponseDTO } from './data-response.dto';

export class UpdateOneProductResponseDTO {
  @ApiProperty({
    type: DataResponseDTO,
  })
  public readonly data: DataResponseDTO;
}
