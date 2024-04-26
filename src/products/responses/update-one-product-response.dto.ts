import { ApiProperty, OmitType } from '@nestjs/swagger';

import { DataProductResponseDTO } from './data-response.dto';

class UpdatedOneProductResponseDTO extends OmitType(DataProductResponseDTO, [
  'deletedAt',
]) {}

export class UpdateOneProductResponseDTO {
  @ApiProperty({
    type: UpdatedOneProductResponseDTO,
  })
  public readonly data: UpdatedOneProductResponseDTO;
}
