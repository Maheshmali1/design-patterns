import { ChairProduct } from "./concrete-chair";

export class LargeChair extends ChairProduct {
    constructor() {
        super();
        this.name = "Large Chair";
        this.height = 30;
        this.width = 30;
        this.depth = 30;
    }
}