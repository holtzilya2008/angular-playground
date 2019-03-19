import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTooltipComponent } from './components/generic-tooltip/generic-tooltip.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { CoreServicesModule } from 'src/app/core-modules/core-services/core-services.module';

@NgModule({
  declarations: [GenericTooltipComponent, TooltipDirective],
  imports: [
    CommonModule,
    CoreServicesModule
  ],
  exports: [
      GenericTooltipComponent,
      TooltipDirective
  ],
  entryComponents: [
      GenericTooltipComponent
  ]
})
export class TooltipModule { }
