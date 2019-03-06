import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalMainComponent } from './components/portal-main/portal-main.component';

const routes: Routes = [
    {
        path: '',
        component: PortalMainComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ],
})
export class PortalRoutingModule { }
