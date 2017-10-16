import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../store/recipe.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Process } from '../store/models/process';

@Component({
    selector: 'recipe-edit',
    templateUrl: './edit.component.html',
    styleUrls: [ './edit.component.scss' ]
})
export class RecipeEditComponent implements OnInit, OnDestroy {
    routeParamsSubscription: Subscription;
    name$: Observable<string>;
    introduction$: Observable<string>;
    processes$: Observable<Process[]>;

    constructor(
        private route: ActivatedRoute,
        private recipeService: RecipeService
    ) { }

    ngOnInit() {
        this.routeParamsSubscription = this.route.params
            .subscribe(params => {
                this.recipeService.load(params.id);
            });

        this.name$ = this.recipeService.name$;
        this.introduction$ = this.recipeService.introduction$;
        this.processes$ = this.recipeService.processes$;
    }

    ngOnDestroy() {
        this.routeParamsSubscription.unsubscribe();
    }

}
