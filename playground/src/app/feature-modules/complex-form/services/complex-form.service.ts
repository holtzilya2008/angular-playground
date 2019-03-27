import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ComplexFormVM } from '../models/complex-form-view-model';

@Injectable({
    providedIn: 'root'
})
export class ComplexFormService {

    private _complexFormSubject: BehaviorSubject<FormGroup>;
    complexForm$: Observable<FormGroup>;

    constructor(private _fb: FormBuilder) {
        this._complexFormSubject = new BehaviorSubject<FormGroup>(
            this._fb.group(new ComplexFormVM(this._fb))
        );
        this.complexForm$ = this._complexFormSubject.asObservable();
    }


}
