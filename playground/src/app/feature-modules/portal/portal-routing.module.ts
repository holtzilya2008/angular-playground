import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalMainComponent } from './components/portal-main/portal-main.component';
import { PortalFirstComponent } from './components/portal-first/portal-first.component';
import { PortalSecondComponent } from './components/portal-second/portal-second.component';
import { PortalThirdComponent } from './components/portal-third/portal-third.component';

const routes: Routes = [
    {
        path: '',
        component: PortalMainComponent,
        children: [
            {
                path: 'first',
                component: PortalFirstComponent,
            },
            {
                path: 'second',
                component: PortalSecondComponent,
            },
            {
                path: 'third',
                component: PortalThirdComponent,
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
export class PortalRoutingModule { }
