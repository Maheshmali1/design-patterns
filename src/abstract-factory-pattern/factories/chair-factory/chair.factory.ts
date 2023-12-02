import { ChairProduct, LargeChair, MediumChair, SmallChair } from "./chair-types";
import { Chair } from "../../interface";
import { FurnitureSize } from "../../constants";

export class ChairFactory {
    static createChair(chairType : FurnitureSize): Chair {
        switch (chairType) {
            case FurnitureSize.LARGE:
                return new LargeChair();
            case FurnitureSize.MEDIUM:
                return new MediumChair();
            case FurnitureSize.SMALL:
                return new SmallChair();
            default: 
                return new ChairProduct();
        }
    }   
}