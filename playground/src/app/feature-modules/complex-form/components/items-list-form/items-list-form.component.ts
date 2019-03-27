import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'pg-items-list-form',
    templateUrl: './items-list-form.component.html',
    styleUrls: ['./items-list-form.component.scss']
})
export class ItemsListFormComponent implements OnInit {

    @Input()
    title = '';

    @Input()
    public formArray: FormArray;

    constructor() {}

    ngOnInit() {}

    onAdd() {
        this.formArray.push(new FormControl('', [Validators.required]));
    }

    onRemove(index: number) {
        this.formArray.removeAt(index);
    }
}
