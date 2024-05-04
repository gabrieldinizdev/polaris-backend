import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import mongoose, { FilterQuery, Model, QueryOptions } from 'mongoose';

import {
  PaginationDTO,
  PaginationMetaDTO,
  PaginationOptionsDTO,
} from '@/shared/dtos/pagination';
import { DataResponse } from '@/shared/interfaces/common';

import { CreateStockItemDTO, UpdateStockItemDTO } from './dtos';
import { StockItem } from './entities';

@Injectable()
export class StockItemsService {
  public constructor(
    @InjectModel(StockItem.name)
    private readonly stockItemModel: Model<StockItem>,
  ) {}

  public async createOne(
    dto: CreateStockItemDTO,
  ): Promise<DataResponse<StockItem>> {
    const stock = new mongoose.Types.ObjectId(dto.stock);
    const product = new mongoose.Types.ObjectId(dto.product);

    const payload = {
      ...dto,
      stock,
      product,
    };

    const stockItem = await this.stockItemModel.create(payload);

    return { data: stockItem };
  }

  public async findAll({
    pagination: { page, size },
  }: {
    pagination: PaginationOptionsDTO;
  }): Promise<PaginationDTO<StockItem>> {
    const query: FilterQuery<StockItem> = {
      deletedAt: {
        $exists: false,
      },
    };
    const options: QueryOptions<StockItem> = {
      limit: size,
      skip: (page - 1) * size,
      sort: { createdAt: -1 },
    };

    const total = await this.stockItemModel.countDocuments(query);

    const data = await this.stockItemModel.find(query, {}, options);

    const meta = new PaginationMetaDTO({ page, size, total });

    const pagination = new PaginationDTO<StockItem>(data, meta);

    return pagination;
  }

  public async findOneById(id: string): Promise<DataResponse<StockItem>> {
    const stock = await this.stockItemModel.findById(id);

    if (!stock) throw new NotFoundException('Stock not found');

    return { data: stock };
  }

  public async updateOneById(
    id: string,
    dto: UpdateStockItemDTO,
  ): Promise<DataResponse<StockItem>> {
    const stock = await this.stockItemModel.findByIdAndUpdate(id, dto, {
      new: true,
    });

    return { data: stock };
  }

  public async deleteOneById(id: string): Promise<DataResponse<StockItem>> {
    const stock = await this.stockItemModel.findByIdAndDelete(id, {
      new: true,
    });

    return { data: stock };
  }
}
