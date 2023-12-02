import { TableProduct } from "./concrete-table";

export class LargeTable extends TableProduct {
    constructor(){
        super();
        this.name = 'Large Table',
        this.height = 30,
        this.width = 30,
        this.depth = 30
    }
}