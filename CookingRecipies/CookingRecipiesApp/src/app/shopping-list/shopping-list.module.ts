import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListService } from './shopping-list.service';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports: [
        RouterModule, 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ShoppingListRoutingModule
    ],
    providers: [ShoppingListService]
})
export class ShoppingListModule {

}