import { Component, OnInit, Input } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
    selector: 'pg-items-list-form',
    templateUrl: './items-list-form.component.html',
    styleUrls: ['./items-list-form.component.scss']
})
export class ItemsListFormComponent implements OnInit {

    @Input()
    public formArray: FormArray;

    constructor() {}

    ngOnInit() {}
}
