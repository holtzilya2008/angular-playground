import { IComplexForm } from '../contracts/complex-form.interface';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerDetailsDTO } from '../contracts/customer-details-dto';

export class ComplexFormBuilder {

    private _customerDetailsForm: FormGroup;
    private _usersList: FormArray;
    private _domainsList: FormArray;

    constructor(private _fb: FormBuilder) {
        this.initNew();
    }

    initFromDTO(customerDetailsDTO: CustomerDetailsDTO): ComplexFormBuilder {
        this._customerDetailsForm = this._fb.group({
            name: this._fb.control(customerDetailsDTO.name, [Validators.required] ),
            description: this._fb.control(customerDetailsDTO.description, [Validators.required] ),
            email: this._fb.control(customerDetailsDTO.email, [Validators.required] )
        });
        this._usersList = this._fb.array(customerDetailsDTO.users.map(u => u.name), []);
        this._domainsList = this._fb.array(customerDetailsDTO.domains.map(d => d.name), []);
        return this;
    }

    build(): IComplexForm {
        return {
            customerDetailsForm: this._customerDetailsForm,
            usersList: this._usersList,
            domainsList: this._domainsList
        };
    }

    private initNew(): ComplexFormBuilder {
        this.initEmptyCustomerDetails();
        this._usersList = this._fb.array([], []);
        this._domainsList = this._fb.array([], []);
        return this;
    }

    private initEmptyCustomerDetails() {
        this._customerDetailsForm = this._fb.group({
            name: this._fb.control('', [Validators.required] ),
            description: this._fb.control('', [Validators.required] ),
            email: this._fb.control('', [Validators.required] )
        });
    }
}
