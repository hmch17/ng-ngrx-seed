import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        canActivate: [ AuthGuardService ]
    },
    {
        path: 'recipe',
        loadChildren: './recipe/recipe.module.ts#RecipeModule',
        canActivate: [ AuthGuardService ]
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, environment.routerConfig) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
