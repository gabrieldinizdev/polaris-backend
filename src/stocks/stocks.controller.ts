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

import { CreateStockDTO, FindOneStockByIdDTO, UpdateStockDTO } from './dtos';
import {
  CreateOneStockResponseDTO,
  FindAllStocksOkResponseDTO,
  FindOneStockOkResponseDTO,
  SoftDeleteOneStockResponseDTO,
  UpdateOneStockResponseDTO,
} from './responses';
import { StocksService } from './stocks.service';

@ApiTags('Stocks')
@Controller('stocks')
export class StocksController {
  public constructor(private readonly stocksService: StocksService) {}

  @ApiOperation({
    summary: 'Create one Stock',
    description: 'This request creates a stock resource',
  })
  @ApiResponse({
    description: 'Returns the created stock',
    type: CreateOneStockResponseDTO,
    status: HttpStatus.CREATED,
  })
  @Post()
  public createOne(@Body() dto: CreateStockDTO) {
    return this.stocksService.createOne(dto);
  }

  @ApiOperation({
    summary: 'Find all Stocks',
    description: 'This request returns all stocks with pagination',
  })
  @ApiResponse({
    description: 'Returns all stocks with pagination',
    type: FindAllStocksOkResponseDTO,
    status: HttpStatus.OK,
  })
  @Get()
  public findAll(@Query() pagination: PaginationOptionsDTO) {
    return this.stocksService.findAll({ pagination });
  }

  @ApiOperation({
    summary: 'Find one Stock by id',
    description: 'This request returns one stock by id',
  })
  @ApiResponse({
    description: 'Returns one stock by id',
    type: FindOneStockOkResponseDTO,
    status: HttpStatus.OK,
  })
  @Get(':id')
  public findOneById(@Param() { id }: FindOneStockByIdDTO) {
    return this.stocksService.findOneById(id);
  }

  @ApiOperation({
    summary: 'Update one stock by id',
    description:
      'This request update one stock by id with the data provided in the body',
  })
  @ApiResponse({
    description: 'update one stock by id response',
    type: UpdateOneStockResponseDTO,
    status: HttpStatus.OK,
  })
  @Patch(':id')
  public updateOneById(
    @Param() { id }: FindOneStockByIdDTO,
    @Body() dto: UpdateStockDTO,
  ) {
    return this.stocksService.updateOneById(id, dto);
  }

  @ApiOperation({
    summary: 'SoftDelete one stock by id',
    description:
      'This request update the field "deletedAt" with the current date making the stock deleted',
  })
  @ApiResponse({
    description: 'Delete stock by id response',
    type: SoftDeleteOneStockResponseDTO,
    status: HttpStatus.OK,
  })
  @Delete(':id')
  public softDeleteById(@Param('id') id: string) {
    return this.stocksService.softDeleteOneById(id);
  }
}
