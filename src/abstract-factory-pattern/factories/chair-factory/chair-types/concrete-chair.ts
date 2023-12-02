import { Dimension } from "../../../interface/dimension.interface";
import { Chair } from "../../../interface/chair.interface";

export class ChairProduct implements Chair {
    name: string;
    height: number;
    width: number;
    depth: number;

    constructor() {
        this.name = '',
        this.height = 0,
        this.width = 0,
        this.depth = 0;
    }

    getDimensions(): Dimension {
        return {
            height: this.height,
            width: this.width,
            depth: this.depth
        }
    }
}
