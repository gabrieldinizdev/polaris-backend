import { ApiProperty, OmitType } from '@nestjs/swagger';

import { DataProductResponseDTO } from './data-response.dto';

export class CreatedOneProductResponseDTO extends OmitType(
  DataProductResponseDTO,
  ['deletedAt'],
) {}

export class CreateOneProductResponseDTO {
  @ApiProperty({
    type: CreatedOneProductResponseDTO,
  })
  public readonly data: CreatedOneProductResponseDTO;
}
