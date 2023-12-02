import { TableProduct } from "./concrete-table"

export class MediumTable extends TableProduct {
    constructor() {
        super();
        this.name = 'Medium Table',
        this.height = 20,
        this.width = 20,
        this.depth = 20
    }
}