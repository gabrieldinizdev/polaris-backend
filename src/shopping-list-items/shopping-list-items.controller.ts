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
  CreateShoppingListItemDTO,
  FindOneShoppingListItemByIdDTO,
  UpdateShoppingListItemDTO,
} from './dtos';
import {
  CreateOneShoppingListItemResponseDTO,
  DeleteOneShoppingListItemResponseDTO,
  FindAllShoppingListItemsOkResponseDTO,
  FindOneShoppingListItemOkResponseDTO,
  UpdateOneShoppingListResponseDTO,
} from './responses';
import { ShoppingListItemsService } from './shopping-list-items.service';

@ApiTags('Shopping List Items')
@Controller('shopping-list-items')
export class ShoppingListItemsController {
  public constructor(
    private readonly shoppingListItemsService: ShoppingListItemsService,
  ) {}

  @ApiOperation({
    summary: 'Create one shopping list Item',
    description: 'This request creates a shopping list item resource',
  })
  @ApiResponse({
    description: 'Returns the created shopping list item',
    type: CreateOneShoppingListItemResponseDTO,
    status: HttpStatus.CREATED,
  })
  @Post()
  public createOne(@Body() dto: CreateShoppingListItemDTO) {
    return this.shoppingListItemsService.createOne(dto);
  }

  @ApiOperation({
    summary: 'Find all shopping list Items',
    description: 'This request returns all shopping list items with pagination',
  })
  @ApiResponse({
    description: 'Returns all shopping list items with pagination',
    type: FindAllShoppingListItemsOkResponseDTO,
    status: HttpStatus.OK,
  })
  @Get()
  public findAll(@Query() pagination: PaginationOptionsDTO) {
    return this.shoppingListItemsService.findAll({ pagination });
  }

  @ApiOperation({
    summary: 'Find one ShoppingList Item by id',
    description: 'This request returns one shopping list item by id',
  })
  @ApiResponse({
    description: 'Returns one shopping list item by id',
    type: FindOneShoppingListItemOkResponseDTO,
    status: HttpStatus.OK,
  })
  @Get(':id')
  public findOneById(@Param() { id }: FindOneShoppingListItemByIdDTO) {
    return this.shoppingListItemsService.findOneById(id);
  }

  @ApiOperation({
    summary: 'Update one shopping list item by id',
    description:
      'This request update one shopping list item by id with the data provided in the body',
  })
  @ApiResponse({
    description: 'update one shopping list item by id response',
    type: UpdateOneShoppingListResponseDTO,
    status: HttpStatus.OK,
  })
  @Patch(':id')
  public updateOneById(
    @Param() { id }: FindOneShoppingListItemByIdDTO,
    @Body() dto: UpdateShoppingListItemDTO,
  ) {
    return this.shoppingListItemsService.updateOneById(id, dto);
  }

  @ApiOperation({
    summary: 'Delete one shopping list item by id',
    description: 'This request deletes shopping list item and returns it',
  })
  @ApiResponse({
    description: 'Delete shopping list item by id response',
    type: DeleteOneShoppingListItemResponseDTO,
    status: HttpStatus.OK,
  })
  @Delete(':id')
  public deleteById(@Param() { id }: FindOneShoppingListItemByIdDTO) {
    return this.shoppingListItemsService.deleteOneById(id);
  }
}
