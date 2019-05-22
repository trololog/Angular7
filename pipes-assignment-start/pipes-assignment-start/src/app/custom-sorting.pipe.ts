import { PipeTransform , Pipe} from '@angular/core';

@Pipe({
    name: 'CustomSorting'
})
export class CustomSortingPipe implements PipeTransform {
    transform(value: any) {

        value.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            } else if (a.name === b.name) {
                return 0;
            } else {
                return 1;
            }
        });

        return value;
    }
}