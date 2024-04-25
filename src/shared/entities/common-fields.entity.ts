import { Prop } from '@nestjs/mongoose';

export class CommonFields {
  public readonly _id: string;

  @Prop({
    type: Date,
  })
  public readonly createdAt: Date;

  @Prop({
    type: Date,
  })
  public readonly updatedAt?: Date;

  @Prop({
    type: Date,
  })
  public readonly deletedAt?: Date;
}
