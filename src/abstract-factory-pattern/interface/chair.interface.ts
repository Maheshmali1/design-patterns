import { Dimension } from "./dimension.interface";

export interface Chair extends Dimension {
    name: string;
    getDimensions() : Dimension;
}