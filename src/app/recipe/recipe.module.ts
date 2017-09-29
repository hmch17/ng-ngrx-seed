import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { EditComponent } from './edit/edit.component';
import { RecipeService } from './store/recipe.service';

@NgModule({
    imports: [
        CommonModule,
        RecipeRoutingModule
    ],
    declarations: [ EditComponent ],
    providers: [RecipeService]
})
export class RecipeModule { }
