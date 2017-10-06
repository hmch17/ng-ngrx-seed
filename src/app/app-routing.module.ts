import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AppOverviewComponent } from './overview/overview.component';
import { UserIdService } from './services/user-id.service';

const routes: Routes = [
    {
        path: '',
        canActivate: [ AuthGuardService ],
        children: [
            {
                path: '',
                component: AppOverviewComponent,
                resolve: { userId: UserIdService }
            },
            {
                path: 'recipe',
                loadChildren: './recipe/recipe.module.ts#RecipeModule'
            }
        ]
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
