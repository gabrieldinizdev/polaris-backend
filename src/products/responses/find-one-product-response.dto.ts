import { ApiProperty } from '@nestjs/swagger';

import { DataProductResponseDTO } from './data-response.dto';

export class FindOneProductOkResponseDTO {
  @ApiProperty({
    type: DataProductResponseDTO,
  })
  public readonly data: DataProductResponseDTO;
}
