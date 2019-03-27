import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'pg-customer-details-form',
    templateUrl: './customer-details-form.component.html',
    styleUrls: ['./customer-details-form.component.scss']
})
export class CustomerDetailsFormComponent implements OnInit {

    @Input()
    form: FormGroup;

    constructor() {}

    ngOnInit() {}

    get name() { return this.form.get('name') as FormControl; }
    get description() { return this.form.get('name') as FormControl; }
    get email() { return this.form.get('name') as FormControl; }

}
