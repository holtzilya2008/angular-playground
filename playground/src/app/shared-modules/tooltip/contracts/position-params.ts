import { Refactor } from "../refactor";

export interface TooltipRelationToTarget
{
    angleInRadians: number;
    distance: number;
}

export interface TooltipPosition {
    x: number;
    y: number;
    height: number;
    width: number;
}

export class TooltipPositionAliases {

    private static _instance: TooltipPositionAliases;

    private DefaultDistancePx = 20;
    private aliases = new Map<string, TooltipRelationToTarget>();

    static getInstance(): TooltipPositionAliases {
        if (!TooltipPositionAliases._instance) {
            TooltipPositionAliases._instance = new TooltipPositionAliases();
        }
        return TooltipPositionAliases._instance;
    }

    private constructor() {
        this.registerAlias('right', {angle: Refactor.toRadians(0), distance: this.DefaultDistancePx } );
        this.registerAlias('top', {angle: Refactor.toRadians(90), distance: this.DefaultDistancePx } );
        this.registerAlias('left', {angle: Refactor.toRadians(180), distance: this.DefaultDistancePx } );
        this.registerAlias('bottom', {angle: Refactor.toRadians(240), distance: this.DefaultDistancePx } );
    }

    registerAlias (alias: string, value: TooltipRelationToTarget) {
        this.aliases.set(alias, value);
    }

    getParams (alias: string): TooltipRelationToTarget {
        return this.aliases.get(alias);
    }

}
