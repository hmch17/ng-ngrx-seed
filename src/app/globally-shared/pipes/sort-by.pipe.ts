import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
    name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

    transform(value: any[], arg: string): any {
        const descending: boolean = /^-.+/.test(arg);
        return _.sortBy(value, item =>
            descending ?
                -item[ arg.slice(1) ] :
                item[ arg ]);
    }

}
