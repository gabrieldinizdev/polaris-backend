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
  CreateStockItemDTO,
  FindOneStockItemByIdDTO,
  UpdateStockItemDTO,
} from './dtos';
import {
  CreateOneStockItemResponseDTO,
  DeleteOneStockItemResponseDTO,
  FindAllStockItemsOkResponseDTO,
  FindOneStockItemOkResponseDTO,
  UpdateOneStockResponseDTO,
} from './responses';
import { StockItemsService } from './stock-items.service';

@ApiTags('Stock Items')
@Controller('stock-items')
export class StockItemsController {
  public constructor(private readonly stockItemsService: StockItemsService) {}

  @ApiOperation({
    summary: 'Create one Stock Item',
    description: 'This request creates a stock item resource',
  })
  @ApiResponse({
    description: 'Returns the created stock item',
    type: CreateOneStockItemResponseDTO,
    status: HttpStatus.CREATED,
  })
  @Post()
  public createOne(@Body() dto: CreateStockItemDTO) {
    return this.stockItemsService.createOne(dto);
  }

  @ApiOperation({
    summary: 'Find all Stock Items',
    description: 'This request returns all stock items with pagination',
  })
  @ApiResponse({
    description: 'Returns all stock items with pagination',
    type: FindAllStockItemsOkResponseDTO,
    status: HttpStatus.OK,
  })
  @Get()
  public findAll(@Query() pagination: PaginationOptionsDTO) {
    return this.stockItemsService.findAll({ pagination });
  }

  @ApiOperation({
    summary: 'Find one Stock Item by id',
    description: 'This request returns one stock item by id',
  })
  @ApiResponse({
    description: 'Returns one stock item by id',
    type: FindOneStockItemOkResponseDTO,
    status: HttpStatus.OK,
  })
  @Get(':id')
  public findOneById(@Param() { id }: FindOneStockItemByIdDTO) {
    return this.stockItemsService.findOneById(id);
  }

  @ApiOperation({
    summary: 'Update one stock item by id',
    description:
      'This request update one stock item by id with the data provided in the body',
  })
  @ApiResponse({
    description: 'update one stock item by id response',
    type: UpdateOneStockResponseDTO,
    status: HttpStatus.OK,
  })
  @Patch(':id')
  public updateOneById(
    @Param() { id }: FindOneStockItemByIdDTO,
    @Body() dto: UpdateStockItemDTO,
  ) {
    return this.stockItemsService.updateOneById(id, dto);
  }

  @ApiOperation({
    summary: 'Delete one stock item by id',
    description: 'This request deletes stock item and returns it',
  })
  @ApiResponse({
    description: 'Delete stock item by id response',
    type: DeleteOneStockItemResponseDTO,
    status: HttpStatus.OK,
  })
  @Delete(':id')
  public deleteById(@Param() { id }: FindOneStockItemByIdDTO) {
    return this.stockItemsService.deleteOneById(id);
  }
}
