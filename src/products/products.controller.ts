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
  CreateProductDTO,
  FindOneProductByIdDTO,
  UpdateProductDTO,
} from './dtos';
import { ProductsService } from './products.service';
import {
  CreateOneProductResponseDTO,
  FindAllProductsOkResponseDTO,
  FindOneProductsOkResponseDTO,
  SoftDeleteOneProductResponseDTO,
  UpdateOneProductResponseDTO,
} from './responses';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  public constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({
    summary: 'Create one Product',
    description: 'This request creates a product resource',
  })
  @ApiResponse({
    description: 'Returns the created product',
    type: CreateOneProductResponseDTO,
    status: HttpStatus.CREATED,
  })
  @Post()
  public createOne(@Body() createUserDto: CreateProductDTO) {
    return this.productsService.createOne(createUserDto);
  }

  @ApiOperation({
    summary: 'Find all Products',
    description: 'This request returns all products with pagination',
  })
  @ApiResponse({
    description: 'Returns all products with pagination',
    type: FindAllProductsOkResponseDTO,
    status: HttpStatus.OK,
  })
  @Get()
  public findAll(@Query() pagination: PaginationOptionsDTO) {
    return this.productsService.findAll({ pagination });
  }

  @ApiOperation({
    summary: 'Find one Product by id',
    description: 'This request returns one product by id',
  })
  @ApiResponse({
    description: 'Returns one product by id',
    type: FindOneProductsOkResponseDTO,
    status: HttpStatus.OK,
  })
  @Get(':id')
  public findOneById(@Param() { id }: FindOneProductByIdDTO) {
    console.log({ id });

    return this.productsService.findOneById(id);
  }

  @ApiOperation({
    summary: 'Update one product by id',
    description:
      'This request update one product by id with the data provided in the body',
  })
  @ApiResponse({
    description: 'update one product by id response',
    type: UpdateOneProductResponseDTO,
    status: HttpStatus.OK,
  })
  @Patch(':id')
  public updateOneById(
    @Param() { id }: FindOneProductByIdDTO,
    @Body() updateProductDto: UpdateProductDTO,
  ) {
    return this.productsService.updateOneById(id, updateProductDto);
  }

  @ApiOperation({
    summary: 'SoftDelete one product by id',
    description:
      'This request update the field "deletedAt" with the current date making the product deleted',
  })
  @ApiResponse({
    description: 'Delete product by id response',
    type: SoftDeleteOneProductResponseDTO,
    status: HttpStatus.OK,
  })
  @Delete(':id')
  public softDeleteById(@Param('id') id: string) {
    return this.productsService.softDeleteOneById(id);
  }
}
