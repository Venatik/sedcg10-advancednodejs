import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class TrimStringsPipe implements PipeTransform {
  transform(value: any): any {
    if (typeof value === 'object' && value !== null) {
      Object.keys(value).forEach((key) => {
        if (typeof value[key] === 'string') {
          // body[name], body[description] etc.
          value[key] = value[key].trim();
        }
      });
      return value; // returns trimmed version
    }
    return value; // returns original value
  }
}
