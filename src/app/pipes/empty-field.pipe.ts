import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyField',
})
export class EmptyFieldPipe implements PipeTransform {
  transform(value: string | undefined): string {
    if (value && value.length > 0) {
      return value;
    }
    return '-';
  }
}
