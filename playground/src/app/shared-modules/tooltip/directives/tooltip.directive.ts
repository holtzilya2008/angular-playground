import { Directive, ApplicationRef, Injector,
         ComponentFactoryResolver, ElementRef,
         AfterViewInit, OnDestroy, HostListener, Input } from '@angular/core';
import { ComponentPortal, DomPortalHost } from '@angular/cdk/portal';
import { GenericTooltipComponent } from '../components/generic-tooltip/generic-tooltip.component';
import { TooltipAppendToOptions } from '../contracts/tooltip-config';

@Directive({
  selector: '[pgTooltip]'
})
export class TooltipDirective implements AfterViewInit, OnDestroy {

    private portalHostElement: HTMLElement;
    private componentPortal: ComponentPortal<GenericTooltipComponent>;
    private portalHost: DomPortalHost;

    @Input()
    public appendTo = TooltipAppendToOptions.Body;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector,
        private hostElement: ElementRef
    ) { }

    ngAfterViewInit(): void {
        this.componentPortal = new ComponentPortal(GenericTooltipComponent);
        this.determinePortalHost():
        this.portalHost = new DomPortalHost(
            this.portalHostElement,
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

    private determinePortalHost() {
        if (this.appendTo === TooltipAppendToOptions.Body) {
            this.portalHostElement = document.body;
        } else {
            this.portalHostElement = this.hostElement.nativeElement as HTMLElement;
        }
    }

    ngOnDestroy(): void {
        this.hideTooltip();
    }


}
