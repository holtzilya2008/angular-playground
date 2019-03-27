import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ComplexFormService } from '../../services/complex-form.service';

@Component({
    selector: 'pg-main-form',
    templateUrl: './main-form.component.html',
    styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

    complexForm: FormGroup;
    complexFormSubscribtion: Subscription;
    customerDetailsFormGroup: FormGroup;
    usersListForm: FormArray;
    domainsListForm: FormArray;

    constructor(private _complexFormService: ComplexFormService) { }

    ngOnInit() {
        this.complexFormSubscribtion = this._complexFormService.complexForm$.subscribe((form) => {
            this.complexForm = form;
            this.customerDetailsFormGroup = form.get('customerDetailsForm') as FormGroup;
            this.usersListForm = form.get('usersList') as FormArray;
            this.domainsListForm = form.get('domainsList') as FormArray;
        });
    }

    onSubmit() {
        console.log(this.complexForm.value);
    }

}
