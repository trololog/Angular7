import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { LoaderSpinnerComponent } from './loader-spinner/loader-spinner.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { DropDownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AlertComponent,
        LoaderSpinnerComponent,
        PlaceholderDirective,
        DropDownDirective
    ], 
    imports : [
        CommonModule
    ], 
    exports: [
        AlertComponent,
        LoaderSpinnerComponent,
        PlaceholderDirective,
        DropDownDirective,
        CommonModule
    ]
})
export class SharedModule {

}