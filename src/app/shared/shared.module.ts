import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './angular-material/app-material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [],
    exports: []
})
export class SharedModule { }

