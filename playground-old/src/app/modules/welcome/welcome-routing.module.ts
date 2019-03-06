import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeShellComponent } from './components/welcome-shell/welcome-shell.component';

const routes: Routes = [
    {
        path: '',
        component: WelcomeShellComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ],
})
export class WelcomeRoutingModule { }
