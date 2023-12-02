import { Dimension } from "../../../interface/dimension.interface";
import { Table } from "../../../interface/table.interface";

export class TableProduct implements Table {
    name: string;
    height: number;
    width: number;
    depth: number;

    constructor() {
        this.name = '',
        this.height = 0,
        this.width = 0,
        this.depth = 0
    }

    getDimensions() : Dimension {
        return {
            height: this.height,
            width: this.width,
            depth: this.depth
        }
    }
}