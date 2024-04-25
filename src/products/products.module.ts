import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductDefinition } from './entities/product.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [MongooseModule.forFeature([ProductDefinition])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
