import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GloballySharedModule } from './globally-shared/globally-shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeModule } from './recipe/recipe.module';

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
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
