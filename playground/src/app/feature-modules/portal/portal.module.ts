import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreServicesModule } from 'src/app/core-modules/core-services/core-services.module';
import { PortalMainComponent } from './components/portal-main/portal-main.component';
import { PortalRoutingModule } from './portal-routing.module';

@NgModule({
  declarations: [

    PortalMainComponent
  ],
  imports: [
    CommonModule,
    CoreServicesModule,
    PortalRoutingModule
  ],
  providers: [
  ]
})
export class PortalModule { }
