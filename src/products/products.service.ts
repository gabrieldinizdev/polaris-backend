import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { FilterQuery, Model, QueryOptions } from 'mongoose';

import {
  PaginationDTO,
  PaginationMetaDTO,
  PaginationOptionsDTO,
} from '@/shared/dtos/pagination';
import { DataResponse } from '@/shared/interfaces/common';

import { CreateProductDTO, UpdateProductDTO } from './dtos';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  public constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
  ) {}

  public async createOne(
    dto: CreateProductDTO,
  ): Promise<DataResponse<Product>> {
    const product = await this.productModel.create(dto);

    return { data: product };
  }

  public async findAll({
    pagination: { page, size },
  }: {
    pagination: PaginationOptionsDTO;
  }): Promise<PaginationDTO<Product>> {
    const query: FilterQuery<Product> = {
      deletedAt: {
        $exists: false,
      },
    };
    const options: QueryOptions<Product> = {
      limit: size,
      skip: (page - 1) * size,
    };

    const total = await this.productModel.countDocuments(query);

    const data = await this.productModel.find(query, {}, options);

    const meta = new PaginationMetaDTO({ page, size, total });

    const pagination = new PaginationDTO<Product>(data, meta);

    return pagination;
  }

  public async findOneById(id: string): Promise<DataResponse<Product>> {
    const product = await this.productModel.findById(id);

    if (!product) throw new NotFoundException('Product not found');

    return { data: product };
  }

  public async updateOneById(
    id: string,
    dto: UpdateProductDTO,
  ): Promise<DataResponse<Product>> {
    const product = await this.productModel.findByIdAndUpdate(id, dto, {
      new: true,
    });

    return { data: product };
  }

  public async softDeleteOneById(id: string): Promise<DataResponse<Product>> {
    const updated = { deletedAt: new Date() };

    const product = await this.productModel.findByIdAndUpdate(id, updated, {
      new: true,
    });

    return { data: product };
  }
}
