import { NgModule } from '@angular/core';
import { VendorModule } from '../vendor/vendor.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    VendorModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [
      VendorModule,
      HttpClientModule,
      ReactiveFormsModule
  ]
})
export class CoreServicesModule { }
