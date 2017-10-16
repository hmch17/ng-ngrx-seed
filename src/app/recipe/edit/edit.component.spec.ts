import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeEditComponent } from './edit.component';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { recipeServiceStub } from '../test/recipe.service.mock';
import { RecipeService } from '../store/recipe.service';

describe('EditComponent', () => {
    let component: RecipeEditComponent;
    let fixture: ComponentFixture<RecipeEditComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: ActivatedRoute, useValue: {
                        params: Observable.of({ id: 1 })
                    }
                }, {
                    provide: RecipeService, useValue: recipeServiceStub
                }
            ],
            declarations: [ RecipeEditComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RecipeEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
