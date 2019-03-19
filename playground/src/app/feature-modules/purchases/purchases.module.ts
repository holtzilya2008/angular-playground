import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasedItemComponent } from './components/purchased-item/purchased-item.component';
import { PurchasedItemsListComponent } from './components/purchased-items-list/purchased-items-list.component';
import { PurchaseManagerViewComponent } from './components/purchase-manager-view/purchase-manager-view.component';
import { HeaderComponent } from './components/header/header.component';
import { PurchaseItemDetailsComponent } from './components/purchase-item-details/purchase-item-details.component';
import { PurchaseItemActionsComponent } from './components/purchase-item-actions/purchase-item-actions.component';
import { PurchasedItemsRepositoryService } from './services/purchased-items-repository.service';
import { PurchasedItemsService } from './services/purchased-items.service';
import { CoreServicesModule } from 'src/app/core-modules/core-services/core-services.module';
import { PurchasesRoutingModule } from './purchases-routing.module';
import { TooltipModule } from 'src/app/shared-modules/tooltip/tooltip.module';

@NgModule({
  declarations: [
    PurchasedItemComponent,
    PurchasedItemsListComponent,
    PurchaseManagerViewComponent,
    HeaderComponent,
    PurchaseItemDetailsComponent,
    PurchaseItemActionsComponent
  ],
  imports: [
    CommonModule,
    PurchasesRoutingModule,
    CoreServicesModule,
    TooltipModule
  ],
  providers: [
    PurchasedItemsService,
    PurchasedItemsRepositoryService
  ]
})
export class PurchasesModule { }
