import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class ReversePipe implements PipeTransform {
    transform(value: any) {
        const arrayValue = value.split('');
        const length = arrayValue.length;
        const inverted = []; inverted.length = length;

        for (let i = 0; i < length; i++) {           
            inverted[i] = arrayValue.pop();
        }

        return inverted.join('');
    }
}