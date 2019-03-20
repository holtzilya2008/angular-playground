import { GenericTooltipComponent } from "../components/generic-tooltip/generic-tooltip.component";
import { TooltipRelationToTarget, TooltipPosition } from "../contracts/position-params";
import { TooltipContainerStyle } from "../contracts/tooltip-container-style";

export class TooltipPositionCalculator {

    constructor(protected tooltipComponent: GenericTooltipComponent,
                protected targetElement: HTMLElement,
                protected positionParams: TooltipRelationToTarget ) {
    }

    calculatePosition(): TooltipContainerStyle {
        const offsetHeight = this.targetElement.offsetHeight;
        const offsetWidth = this.targetElement.offsetWidth;
        const offsetX = this.targetElement.offsetLeft + offsetWidth / 2;
        const offsetY = this.targetElement.offsetTop + offsetHeight / 2;

        const tooltipHeight = 100;
        const tooltipWidth = 200;
        const tooltipX = offsetX + this.positionParams.distance * Math.cos(this.positionParams.angleInRadians) + tooltipWidth / 2;
        const tooltipY = offsetY + this.positionParams.distance * Math.sin(this.positionParams.angleInRadians) + tooltipHeight / 2;

        return {
            position: 'fixed',
            height: `${tooltipHeight}px`,
            width: `${tooltipWidth}px`,
            top: `${tooltipX}`,
            left: `${tooltipY}`
        };
    }

}
