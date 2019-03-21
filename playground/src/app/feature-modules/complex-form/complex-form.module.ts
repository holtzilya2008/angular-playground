import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFormComponent } from './components/main-form/main-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ItemsListFormComponent } from './components/items-list-form/items-list-form.component';
import { CustomerDetailsFormComponent } from './components/customer-details-form/customer-details-form.component';
import { ComplexFormRoutingModule } from './complex-form-routing.module';

@NgModule({
  declarations: [MainFormComponent, ProductsListComponent, ItemsListFormComponent, CustomerDetailsFormComponent],
  imports: [
    CommonModule,
    ComplexFormRoutingModule
  ]
})
export class ComplexFormModule { }
