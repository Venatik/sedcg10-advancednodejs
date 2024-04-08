import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateProduct, Product } from 'src/interfaces/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  // Dependency Injection
  // One instance of ProductsService is created and shared across all requests
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAll(): Product[] {
    // const service = new ProductsService();
    // return service.getAll();
    return this.productsService.getAll();
  }

  @Get(':id')
  getById(@Param() params): Product {
    // const service = new ProductsService();
    // // console.log(id);
    // return service.getById(id);
    const id = params.id;
    return this.productsService.getById(id);
  }

  @Post()
  create(@Body() body: CreateProduct) {
    return this.productsService.create(body);
  }

  @Patch(':id')
  update(@Param() params, @Body() body: Partial<CreateProduct>) {
    const id = params.id;
    return this.productsService.update(id, body);
  }

  @Put(':id')
  replace(@Param() params, @Body() body: CreateProduct) {
    const id = params.id;
    return this.productsService.replace(id, body);
  }

  @Delete(':id')
  delete(@Param() params) {
    const id = params.id;
    const isProductDeleted = this.productsService.delete(id);
    if (isProductDeleted) {
      return 'Product deleted successfully.';
    }
    return 'Delete operation failed.';
  }
}
