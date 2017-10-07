import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeEditComponent } from './edit/edit.component';
import { environment } from '../../environments/environment';

const routes: Routes = [
    {
        path: 'byid/:id',
        component: RecipeEditComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class RecipeRoutingModule { }
