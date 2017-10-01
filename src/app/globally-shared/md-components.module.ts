import { NgModule } from '@angular/core';
import {
    MdButtonModule,
    MdInputModule,
    MdCardModule,
    MdListModule
} from '@angular/material';

const MD_MODULES = [
    MdButtonModule,
    MdInputModule,
    MdCardModule,
    MdListModule
];

@NgModule({
    imports: MD_MODULES,
    exports: MD_MODULES
})
export class MdComponentsModule { }
