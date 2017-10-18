import { NgModule } from '@angular/core';
import {
    MatCardModule,
    MatListModule,
    MatButtonModule
} from '@angular/material';

const MD_MODULES = [
    MatCardModule,
    MatListModule,
    MatButtonModule
];

@NgModule({
    imports: MD_MODULES,
    exports: MD_MODULES
})
export class MdComponentsModule { }
