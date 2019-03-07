import { Component, OnInit, ComponentFactoryResolver, ApplicationRef, Injector, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { CdkPortal, DomPortalHost } from '@angular/cdk/portal';

@Component({
  selector: 'pg-portal-smart',
  templateUrl: './portal-smart.component.html',
  styleUrls: ['./portal-smart.component.scss']
})
export class PortalSmartComponent implements AfterViewInit, OnDestroy {

    @ViewChild(CdkPortal)
    private portal: CdkPortal;

    private host: DomPortalHost;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private appRef: ApplicationRef,
                private injector: Injector
        ) { }

    ngAfterViewInit(): void {
        const outlet = this.getDefaultPortalOutlet();
        this.host = new DomPortalHost(outlet, this.componentFactoryResolver, this.appRef, this.injector);
        this.host.attach(this.portal);
    }

    private getDefaultPortalOutlet(): Element {
        const outlet = document.querySelector('#pg-portal-outlet');
        console.log(outlet);
        return outlet;
    }

    ngOnDestroy(): void {
        this.host.detach();
    }


}
