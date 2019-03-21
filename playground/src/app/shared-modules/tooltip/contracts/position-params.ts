import { MathUtils } from '../../../core-modules/utils/math-util';

export interface TooltipRelationToTarget {
    angleInRadians: number;
    distance: number;
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
        this.registerAlias('right', {angleInRadians: MathUtils.toRadians(0), distance: this.DefaultDistancePx } );
        this.registerAlias('top', {angleInRadians: MathUtils.toRadians(90), distance: this.DefaultDistancePx } );
        this.registerAlias('left', {angleInRadians: MathUtils.toRadians(180), distance: this.DefaultDistancePx } );
        this.registerAlias('bottom', {angleInRadians: MathUtils.toRadians(240), distance: this.DefaultDistancePx } );
    }

    registerAlias (alias: string, value: TooltipRelationToTarget) {
        this.aliases.set(alias, value);
    }

    getParams (alias: string): TooltipRelationToTarget {
        return this.aliases.get(alias);
    }

}
