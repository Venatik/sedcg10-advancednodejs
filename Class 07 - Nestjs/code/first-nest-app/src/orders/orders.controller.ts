import { Controller, Get, Param } from '@nestjs/common';
import { Order } from 'src/interfaces/order.interface';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getAll(): Order[] {
    return this.ordersService.getAll();
  }

  @Get(':id')
  getById(@Param() params): Order {
    const id = params.id;
    return this.ordersService.getById(id);
  }
}
