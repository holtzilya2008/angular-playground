import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseManagerViewComponent } from './components/purchase-manager-view/purchase-manager-view.component';
import { PurchaseItemDetailsComponent } from './components/purchase-item-details/purchase-item-details.component';

const routes: Routes = [
    {
        path: '',
        component: PurchaseManagerViewComponent,
        children: [
            {
                path: ':id',
                component: PurchaseItemDetailsComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ],
})
export class PurchasesRoutingModule { }
