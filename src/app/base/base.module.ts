import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MdComponentsModule } from './md-components.module';
import { SortByPipe } from './pipes/sort-by.pipe';

const DECLARATIONS = [
    SortByPipe
];

const IMPORTS = [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MdComponentsModule
];

@NgModule({
    declarations: DECLARATIONS,
    imports: IMPORTS,
    exports: [ ...IMPORTS, ...DECLARATIONS ]
})
export class BaseModule { }
