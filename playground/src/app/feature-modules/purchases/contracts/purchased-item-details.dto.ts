import { PurchasedItemBase } from "./purchased-item-base";

export interface PurchasedItemDetailsDTO extends PurchasedItemBase {
    price: number;
}
