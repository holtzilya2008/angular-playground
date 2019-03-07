import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreServicesModule } from 'src/app/core-modules/core-services/core-services.module';
import { PortalMainComponent } from './components/portal-main/portal-main.component';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalFirstComponent } from './components/portal-first/portal-first.component';
import { PortalSecondComponent } from './components/portal-second/portal-second.component';
import { PortalThirdComponent } from './components/portal-third/portal-third.component';
import { PortalSmartComponent } from './components/portal-smart/portal-smart.component';
import { PortalHeaderComponent } from './components/portal-header/portal-header.component';

@NgModule({
  declarations: [

    PortalMainComponent,

    PortalFirstComponent,

    PortalSecondComponent,

    PortalThirdComponent,

    PortalSmartComponent,

    PortalHeaderComponent
  ],
  imports: [
    CommonModule,
    CoreServicesModule,
    PortalRoutingModule
  ],
  providers: [
  ],
  entryComponents: [
      PortalSmartComponent
  ]
})
export class PortalModule { }
