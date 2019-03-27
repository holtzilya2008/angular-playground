import { FormGroup, FormArray } from '@angular/forms';

export interface IComplexForm {
    customerDetailsForm: FormGroup;
    usersList: FormArray;
    domainsList: FormArray;
}
