import { FurnitureSize, FurnitureType } from "./constants";
import { ChairFactory } from "./factories/chair-factory/chair.factory";
import { TableFactory } from "./factories/table-factory/table.factory";
import { Furniture } from "./interface";

export class FurnitureFactory {
    static getFurniture(furnitureType: FurnitureType, furnitureSize: FurnitureSize ) {
        switch(furnitureType) {
            case FurnitureType.TABLE:
                return TableFactory.createTable(furnitureSize);
            case FurnitureType.CHAIR:
                return ChairFactory.createChair(furnitureSize);
            default:
                return null;
        }
    }
}