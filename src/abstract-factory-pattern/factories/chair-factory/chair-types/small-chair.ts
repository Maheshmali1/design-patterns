import { ChairProduct } from "./concrete-chair";

export class SmallChair extends ChairProduct{
    constructor(){
        super();
        this.name = "Small Chair";
        this.height = 10;
        this.width = 10;
        this.depth = 10;
    }
}