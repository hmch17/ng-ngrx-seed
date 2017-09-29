import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GloballySharedModule } from './globally-shared/globally-shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeModule } from './recipe/recipe.module';
import { CookbookService } from './store/cookbook.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        GloballySharedModule,
        AppRoutingModule,
        RecipeModule
    ],
    providers: [CookbookService],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
