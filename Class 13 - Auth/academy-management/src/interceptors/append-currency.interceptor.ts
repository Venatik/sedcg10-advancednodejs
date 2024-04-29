import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AppendCurrencyInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): any {
    const response = context.switchToHttp().getResponse();

    // Modify the response JSON method to append currency to price
    const originalJson = response.json.bind(response);
    response.json = (data: any) => {
      data = this.appendCurrency(data);
      originalJson(data);
    };

    return next.handle();
  }

  // Helper function for appending currency
  private appendCurrency(data: any): any {
    if (Array.isArray(data)) {
      return data.map((item) => this.modifyPrice(item));
    } else if (data && typeof data === 'object') {
      return this.modifyPrice(data);
    }
    return data;
  }

  private modifyPrice(item: any): any {
    if (item.hasOwnProperty('price') && typeof item.price === 'number') {
      item.price = `${item.price} EUR`; // Append EUR to the price property
    }
    return item;
  }
}
