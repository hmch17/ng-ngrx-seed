import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { GloballySharedModule } from './globally-shared/globally-shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeModule } from './recipe/recipe.module';
import { CookbookService } from './store/cookbook.service';
import { CookbookApiService } from './store/cookbook-api.service';
import { cookbookReducer } from './store/cookbook.reducer';
import { ErrorComponent } from './error/error.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserService } from './store/user.service';

@NgModule({
    declarations: [
        AppComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        GloballySharedModule,
        AppRoutingModule,
        RecipeModule,
        StoreModule.forRoot(cookbookReducer)
    ],
    providers: [ CookbookService, CookbookApiService, AuthGuardService, UserService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
