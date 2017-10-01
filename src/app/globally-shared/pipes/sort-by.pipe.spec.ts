import { TestBed } from '@angular/core/testing';
import * as _ from 'lodash';

import { SortByPipe } from './sort-by.pipe';
import { mockRecipeItems } from '../../test/recipe-items.mock';

describe('SortByPipe', () => {
    const testData = mockRecipeItems.slice(0, 3);

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ SortByPipe ]
        });
    });

    it('should  have a defined pipe', () => {
        expect(true).toBeTruthy();
    });

    it('should sort the items according to the argument', () => {
        const pipe = new SortByPipe();
        let expectedResult = _.sortBy(testData, item => -item.name);
        expect(pipe.transform(testData, '-name')).toEqual(expectedResult);
        expectedResult = _.sortBy(testData, item => item.name);
        expect(pipe.transform(testData, 'name')).toEqual(expectedResult);
    });
});
