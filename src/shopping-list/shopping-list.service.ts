import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { FilterQuery, Model, QueryOptions } from 'mongoose';

import {
  PaginationDTO,
  PaginationMetaDTO,
  PaginationOptionsDTO,
} from '@/shared/dtos/pagination';
import { DataResponse } from '@/shared/interfaces/common';

import { CreateShoppingListDTO, UpdateShoppingListDTO } from './dtos';
import { ShoppingList } from './entities';

@Injectable()
export class ShoppingListService {
  public constructor(
    @InjectModel(ShoppingList.name)
    private readonly shoppingListModel: Model<ShoppingList>,
  ) {}

  public async createOne(
    dto: CreateShoppingListDTO,
  ): Promise<DataResponse<ShoppingList>> {
    const stock = await this.shoppingListModel.create(dto);

    return { data: stock };
  }

  public async findAll({
    pagination: { page, size },
  }: {
    pagination: PaginationOptionsDTO;
  }): Promise<PaginationDTO<ShoppingList>> {
    const query: FilterQuery<ShoppingList> = {
      deletedAt: {
        $exists: false,
      },
    };
    const options: QueryOptions<ShoppingList> = {
      limit: size,
      skip: (page - 1) * size,
      sort: { createdAt: -1 },
    };

    const total = await this.shoppingListModel.countDocuments(query);

    const data = await this.shoppingListModel.find(query, {}, options);

    const meta = new PaginationMetaDTO({ page, size, total });

    const pagination = new PaginationDTO<ShoppingList>(data, meta);

    return pagination;
  }

  public async findOneById(id: string): Promise<DataResponse<ShoppingList>> {
    const stock = await this.shoppingListModel.findById(id);

    if (!stock) throw new NotFoundException('ShoppingList not found');

    return { data: stock };
  }

  public async updateOneById(
    id: string,
    dto: UpdateShoppingListDTO,
  ): Promise<DataResponse<ShoppingList>> {
    const stock = await this.shoppingListModel.findByIdAndUpdate(id, dto, {
      new: true,
    });

    return { data: stock };
  }

  public async softDeleteOneById(
    id: string,
  ): Promise<DataResponse<ShoppingList>> {
    const updated = { deletedAt: new Date() };

    const stock = await this.shoppingListModel.findByIdAndUpdate(id, updated, {
      new: true,
    });

    return { data: stock };
  }
}
