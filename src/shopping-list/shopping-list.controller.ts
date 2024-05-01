import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { PaginationOptionsDTO } from '@/shared/dtos/pagination';

import {
  CreateShoppingListDTO,
  FindOneShoppingListByIdDTO,
  UpdateShoppingListDTO,
} from './dtos';
import {
  CreateOneShoppingListResponseDTO,
  FindAllShoppingListOkResponseDTO,
  FindOneShoppingListOkResponseDTO,
  SoftDeleteOneShoppingListResponseDTO,
  UpdateOneShoppingListResponseDTO,
} from './responses';
import { ShoppingListService } from './shopping-list.service';

@ApiTags('Shopping List')
@Controller('shopping-list')
export class ShoppingListController {
  public constructor(
    private readonly shoppingListService: ShoppingListService,
  ) {}

  @ApiOperation({
    summary: 'Create one Shopping List',
    description: 'This request creates a shopping list resource',
  })
  @ApiResponse({
    description: 'Returns the created shopping list',
    type: CreateOneShoppingListResponseDTO,
    status: HttpStatus.CREATED,
  })
  @Post()
  public createOne(@Body() dto: CreateShoppingListDTO) {
    return this.shoppingListService.createOne(dto);
  }

  @ApiOperation({
    summary: 'Find all Shopping List',
    description: 'This request returns all shoppingList with pagination',
  })
  @ApiResponse({
    description: 'Returns all shopping list with pagination',
    type: FindAllShoppingListOkResponseDTO,
    status: HttpStatus.OK,
  })
  @Get()
  public findAll(@Query() pagination: PaginationOptionsDTO) {
    return this.shoppingListService.findAll({ pagination });
  }

  @ApiOperation({
    summary: 'Find one Shopping List by id',
    description: 'This request returns one shopping list by id',
  })
  @ApiResponse({
    description: 'Returns one shopping list by id',
    type: FindOneShoppingListOkResponseDTO,
    status: HttpStatus.OK,
  })
  @Get(':id')
  public findOneById(@Param() { id }: FindOneShoppingListByIdDTO) {
    return this.shoppingListService.findOneById(id);
  }

  @ApiOperation({
    summary: 'Update one shopping list by id',
    description:
      'This request update one shopping list by id with the data provided in the body',
  })
  @ApiResponse({
    description: 'update one shopping list by id response',
    type: UpdateOneShoppingListResponseDTO,
    status: HttpStatus.OK,
  })
  @Patch(':id')
  public updateOneById(
    @Param() { id }: FindOneShoppingListByIdDTO,
    @Body() dto: UpdateShoppingListDTO,
  ) {
    return this.shoppingListService.updateOneById(id, dto);
  }

  @ApiOperation({
    summary: 'SoftDelete one shopping list by id',
    description:
      'This request update the field "deletedAt" with the current date making the shopping list deleted',
  })
  @ApiResponse({
    description: 'Delete shopping list by id response',
    type: SoftDeleteOneShoppingListResponseDTO,
    status: HttpStatus.OK,
  })
  @Delete(':id')
  public softDeleteById(@Param() { id }: FindOneShoppingListByIdDTO) {
    return this.shoppingListService.softDeleteOneById(id);
  }
}
