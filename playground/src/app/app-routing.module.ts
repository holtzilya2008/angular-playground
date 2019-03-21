import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteNames } from './contracts/route-names';

const routes: Routes = [
    {
        path: RouteNames.Purchases,
        loadChildren: './feature-modules/purchases/purchases.module#PurchasesModule'
    },
    {
        path: RouteNames.Portal,
        loadChildren: './feature-modules/portal/portal.module#PortalModule'
    },
    {
        path: RouteNames.ComplexForm,
        loadChildren: './feature-modules/complex-form/complex-form.module#ComplexFormModule'
    },
    {
        path: '**',
        redirectTo: RouteNames.ComplexForm
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
