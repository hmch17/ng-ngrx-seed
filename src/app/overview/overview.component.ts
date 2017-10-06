import { Component, OnInit } from '@angular/core';
import { UserService } from '../store/user.service';
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
        private user: UserService,
        private cookbook: CookbookService
    ) { }

    ngOnInit() {
        this.user.get$()
            .map(user => user.id)
            .do(userId => this.cookbook.load(userId));
        this.recipeItems$ = this.cookbook.recipeItems$;
    }

}
