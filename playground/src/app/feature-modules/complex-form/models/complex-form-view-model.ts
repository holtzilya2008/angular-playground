import {CustomerDetailsFormVM} from './cutomer-details-form-view-model';
import { FormArray, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


export class ComplexFormVM {
    customerDetailsForm: FormGroup;
    usersList: FormArray;
    domainsList: FormArray;

    constructor(_fb: FormBuilder) {
        this.customerDetailsForm = _fb.group(new CustomerDetailsFormVM(_fb));
        this.usersList = _fb.array([], []);
        this.domainsList = _fb.array([], []);
    }
}

