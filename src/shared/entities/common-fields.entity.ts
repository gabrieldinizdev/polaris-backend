import { Prop } from '@nestjs/mongoose';

import { Transform } from 'class-transformer';
import { ObjectId } from 'mongoose';

export class CommonFields {
  @Transform(({ value }) => value.toString())
  public readonly _id: ObjectId;

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
