import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import mongoose, { FilterQuery, Model, QueryOptions } from 'mongoose';

import {
  PaginationDTO,
  PaginationMetaDTO,
  PaginationOptionsDTO,
} from '@/shared/dtos/pagination';
import { DataResponse } from '@/shared/interfaces/common';

import { CreateStockDTO, UpdateStockDTO } from './dtos';
import { Stock } from './entities';

@Injectable()
export class StocksService {
  public constructor(
    @InjectModel(Stock.name)
    private readonly stockModel: Model<Stock>,
  ) {}

  public async createOne(dto: CreateStockDTO): Promise<DataResponse<Stock>> {
    const stock = await this.stockModel.create(dto);

    return { data: stock };
  }

  public async returnItemsFromStockById(
    id: string,
    {
      pagination: { page, size },
    }: {
      pagination: PaginationOptionsDTO;
    },
  ): Promise<DataResponse<Stock[]>> {
    const stock = await this.stockModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(id),
          deletedAt: {
            $exists: false,
          },
        },
      },
      {
        $lookup: {
          from: 'stockitems',
          localField: '_id',
          foreignField: 'stock',
          as: 'items',
          pipeline: [
            {
              $sort: { createdAt: -1 },
            },
            {
              $limit: +size,
            },
            {
              $skip: (+page - 1) * +size,
            },
            {
              $lookup: {
                from: 'products',
                localField: 'product',
                foreignField: '_id',
                as: 'product',
                pipeline: [
                  {
                    $match: {
                      deletedAt: {
                        $exists: false,
                      },
                    },
                  },
                  {
                    $project: {
                      name: 1,
                    },
                  },
                ],
              },
            },
            {
              $unwind: '$product',
            },
          ],
        },
      },
    ]);

    return { data: stock };
  }

  public async findAll({
    pagination: { page, size },
  }: {
    pagination: PaginationOptionsDTO;
  }): Promise<PaginationDTO<Stock>> {
    const query: FilterQuery<Stock> = {
      deletedAt: {
        $exists: false,
      },
    };
    const options: QueryOptions<Stock> = {
      limit: size,
      skip: (page - 1) * size,
      sort: { createdAt: -1 },
    };

    const total = await this.stockModel.countDocuments(query);

    const data = await this.stockModel.find(query, {}, options);

    const meta = new PaginationMetaDTO({ page, size, total });

    const pagination = new PaginationDTO<Stock>(data, meta);

    return pagination;
  }

  public async findOneById(id: string): Promise<DataResponse<Stock>> {
    const stock = await this.stockModel.findById(id);

    if (!stock) throw new NotFoundException('Stock not found');

    return { data: stock };
  }

  public async updateOneById(
    id: string,
    dto: UpdateStockDTO,
  ): Promise<DataResponse<Stock>> {
    const stock = await this.stockModel.findByIdAndUpdate(id, dto, {
      new: true,
    });

    return { data: stock };
  }

  public async softDeleteOneById(id: string): Promise<DataResponse<Stock>> {
    const updated = { deletedAt: new Date() };

    const stock = await this.stockModel.findByIdAndUpdate(id, updated, {
      new: true,
    });

    return { data: stock };
  }
}
