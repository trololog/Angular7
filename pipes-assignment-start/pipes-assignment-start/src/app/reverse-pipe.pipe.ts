import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'reversed'
})
export class ReversePipe implements PipeTransform {
    transform(value: any) {
        const arrayValue = value.split('');
        const length = arrayValue.length;
        let item;

        for (let i = 0; i < length; i++) {
            item = arrayValue.pop();
            arrayValue.splice(i, 0, item);
        }

        return arrayValue.join('');
    }
}