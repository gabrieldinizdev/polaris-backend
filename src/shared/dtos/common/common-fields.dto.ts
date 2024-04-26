import { ApiProperty } from '@nestjs/swagger';

export class CommonFieldsDTO {
  @ApiProperty({
    description: 'Unique "_id" in the application',
    example: '6629c827516ccbf6de9a1bd5',
    readOnly: true,
    required: false,
  })
  public readonly _id: string;

  @ApiProperty({
    description: 'Created at date',
    readOnly: true,
  })
  public readonly createdAt: Date;

  @ApiProperty({
    description: 'Updated at date',
    readOnly: true,
    required: false,
  })
  public readonly updatedAt?: Date;

  @ApiProperty({
    description: 'Deleted at date',
    readOnly: true,
    required: false,
  })
  public readonly deletedAt?: Date;
}
