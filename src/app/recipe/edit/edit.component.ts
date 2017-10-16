import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../store/recipe.service';
import { Recipe } from '../store/models/recipe';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'recipe-edit',
    templateUrl: './edit.component.html',
    styleUrls: [ './edit.component.scss' ]
})
export class RecipeEditComponent implements OnInit {
    recipe$: Observable<Recipe>;

    constructor(
        private route: ActivatedRoute,
        private recipeService: RecipeService
    ) { }

    ngOnInit() {
        this.route.params
            .map(params => params.id)
            .do(id => this.recipeService.load(id));
        this.recipe$ = this.recipeService.recipe$;
    }

}
