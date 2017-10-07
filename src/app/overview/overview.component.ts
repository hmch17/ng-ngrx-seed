import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookbookService } from '../store/cookbook.service';
import { Observable } from 'rxjs/Observable';
import { RecipeItem } from '../store/models/recipe-item';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: [ './overview.component.scss' ]
})
export class AppOverviewComponent implements OnInit {
    recipeItems$: Observable<RecipeItem[]>;

    constructor(
        private route: ActivatedRoute,
        private cookbook: CookbookService
    ) {
    }

    ngOnInit() {
        const userId = this.route.snapshot.data[ 'userId' ];
        this.cookbook.load(userId);
        this.recipeItems$ = this.cookbook.recipeItems$;
    }

}
