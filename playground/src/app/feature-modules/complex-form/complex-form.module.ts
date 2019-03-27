import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFormComponent } from './components/main-form/main-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ItemsListFormComponent } from './components/items-list-form/items-list-form.component';
import { CustomerDetailsFormComponent } from './components/customer-details-form/customer-details-form.component';
import { ComplexFormRoutingModule } from './complex-form-routing.module';
import { CoreServicesModule } from 'src/app/core-modules/core-services/core-services.module';
import { ComplexFormService } from './services/complex-form.service';
import { ComplexFormApiService } from './services/complex-form-api.service';

@NgModule({
  declarations: [MainFormComponent, ProductsListComponent, ItemsListFormComponent, CustomerDetailsFormComponent],
  imports: [
    CommonModule,
    ComplexFormRoutingModule,
    CoreServicesModule
  ],
  providers: [
      ComplexFormService,
      ComplexFormApiService
  ]
})
export class ComplexFormModule { }
