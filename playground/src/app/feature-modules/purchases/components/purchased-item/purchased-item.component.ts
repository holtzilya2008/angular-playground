import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PurchasedItemVM } from '../..//models/purchased-item-vm';

@Component({
  selector: 'pg-purchased-item',
  templateUrl: './purchased-item.component.html',
  styleUrls: ['./purchased-item.component.scss']
})
export class PurchasedItemComponent implements OnInit {

    @Input()
    public purchasedItem: PurchasedItemVM;

    @Output()
    public deleteClicked = new EventEmitter<PurchasedItemVM>();

    @Output()
    public selected = new EventEmitter<PurchasedItemVM>();

    constructor() { }

    ngOnInit() {
    }

    onDelete() {
        this.deleteClicked.emit(this.purchasedItem);
    }

    setAsSelected() {
        if (!this.purchasedItem.isSelected) {
            this.selected.emit(this.purchasedItem);
        }
    }

}
