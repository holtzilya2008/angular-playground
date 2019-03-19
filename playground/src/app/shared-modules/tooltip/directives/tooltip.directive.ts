import { Directive, ApplicationRef, Injector, ComponentFactoryResolver, ElementRef, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { ComponentPortal, DomPortalHost } from '@angular/cdk/portal';
import { GenericTooltipComponent } from '../components/generic-tooltip/generic-tooltip.component';

@Directive({
  selector: '[pgTooltip]'
})
export class TooltipDirective implements AfterViewInit, OnDestroy {

    private componentPortal: ComponentPortal<GenericTooltipComponent>;
    private portalHost: DomPortalHost;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector,
        private hostElement: ElementRef
    ) { }

    ngAfterViewInit(): void {
        this.componentPortal = new ComponentPortal(GenericTooltipComponent);
        this.portalHost = new DomPortalHost(
            this.hostElement.nativeElement,
            this.componentFactoryResolver,
            this.appRef,
            this.injector
        );
    }

    @HostListener('mouseover') onMouseOver(){
        this.showTooltip();
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.hideTooltip();
    }

    private showTooltip() {
        if (!this.portalHost.hasAttached()) {
            this.portalHost.attach(this.componentPortal);
        }
    }

    private hideTooltip() {
        if (this.portalHost.hasAttached()) {
            this.portalHost.detach();
        }
    }

    ngOnDestroy(): void {
        this.hideTooltip();
    }


}
