import { FormControl, FormBuilder, Validators } from '@angular/forms';

export class CustomerDetailsFormVM {
    name: FormControl;
    description: FormControl;
    email: FormControl;

    constructor(_fb: FormBuilder) {
        this.name = _fb.control('', [Validators.required] );
        this.description = _fb.control('', [Validators.required] );
        this.email = _fb.control('', [Validators.required] );
    }
}
