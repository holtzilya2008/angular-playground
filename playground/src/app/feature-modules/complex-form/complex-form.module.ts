import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFormComponent } from './components/main-form/main-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ItemsListFormComponent } from './components/items-list-form/items-list-form.component';
import { CustomerDetailsFormComponent } from './components/customer-details-form/customer-details-form.component';

@NgModule({
  declarations: [MainFormComponent, ProductsListComponent, ItemsListFormComponent, CustomerDetailsFormComponent],
  imports: [
    CommonModule
  ]
})
export class ComplexFormModule { }
