import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { FilterQuery, Model, QueryOptions } from 'mongoose';

import {
  PaginationDTO,
  PaginationMetaDTO,
  PaginationOptionsDTO,
} from '@/shared/dtos/pagination';
import { DataResponse } from '@/shared/interfaces/common';

import { CreateShoppingListItemDTO, UpdateShoppingListItemDTO } from './dtos';
import { ShoppingListItem } from './entities';

@Injectable()
export class ShoppingListItemsService {
  public constructor(
    @InjectModel(ShoppingListItem.name)
    private readonly shoppingListItemModel: Model<ShoppingListItem>,
  ) {}

  public async createOne(
    dto: CreateShoppingListItemDTO,
  ): Promise<DataResponse<ShoppingListItem>> {
    const stockItem = await this.shoppingListItemModel.create(dto);

    return { data: stockItem };
  }

  public async findAll({
    pagination: { page, size },
  }: {
    pagination: PaginationOptionsDTO;
  }): Promise<PaginationDTO<ShoppingListItem>> {
    const query: FilterQuery<ShoppingListItem> = {
      deletedAt: {
        $exists: false,
      },
    };
    const options: QueryOptions<ShoppingListItem> = {
      limit: size,
      skip: (page - 1) * size,
      sort: { createdAt: -1 },
    };

    const total = await this.shoppingListItemModel.countDocuments(query);

    const data = await this.shoppingListItemModel.find(query, {}, options);

    const meta = new PaginationMetaDTO({ page, size, total });

    const pagination = new PaginationDTO<ShoppingListItem>(data, meta);

    return pagination;
  }

  public async findOneById(
    id: string,
  ): Promise<DataResponse<ShoppingListItem>> {
    const stock = await this.shoppingListItemModel.findById(id);

    if (!stock) throw new NotFoundException('ShoppingList not found');

    return { data: stock };
  }

  public async updateOneById(
    id: string,
    dto: UpdateShoppingListItemDTO,
  ): Promise<DataResponse<ShoppingListItem>> {
    const stock = await this.shoppingListItemModel.findByIdAndUpdate(id, dto, {
      new: true,
    });

    return { data: stock };
  }

  public async deleteOneById(
    id: string,
  ): Promise<DataResponse<ShoppingListItem>> {
    const stock = await this.shoppingListItemModel.findByIdAndDelete(id, {
      new: true,
    });

    return { data: stock };
  }
}
