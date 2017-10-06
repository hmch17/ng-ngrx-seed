import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

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
import { AppOverviewComponent } from './overview/overview.component';
import { UserEffects } from './store/user/user.effects';
import { RecipeItemsEffects } from './store/recipe-items/recipe-items.effects';

@NgModule({
    declarations: [
        AppComponent,
        ErrorComponent,
        AppOverviewComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        GloballySharedModule,
        AppRoutingModule,
        RecipeModule,
        StoreModule.forRoot(cookbookReducer),
        EffectsModule.forRoot([ RecipeItemsEffects, UserEffects ])
    ],
    providers: [ CookbookService, CookbookApiService, AuthGuardService, UserService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
