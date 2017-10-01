import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeEditComponent } from './edit/edit.component';
import { RecipeService } from './store/recipe.service';

@NgModule({
    imports: [
        CommonModule,
        RecipeRoutingModule
    ],
    declarations: [ RecipeEditComponent ],
    providers: [ RecipeService ]
})
export class RecipeModule { }
