import { GenericTooltipComponent } from "../components/generic-tooltip/generic-tooltip.component";
import { TooltipPositionCalculator } from "./tooltip-position-calculator";

export class TooltipPositioner {

    constructor(private positionCalculator: TooltipPositionCalculator,
                private tooltipComponentRef: GenericTooltipComponent ) {
    }

    public placeTooltip() {
        this.tooltipComponentRef.tooltipContainerStyle = this.positionCalculator.calculatePosition();
    }

}
