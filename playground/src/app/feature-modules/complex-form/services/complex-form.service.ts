import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ComplexFormApiService } from './complex-form-api.service';
import { ComplexFormBuilder } from '../logic/complex-form-builder';
import { map, catchError } from 'rxjs/operators';
import { CompileTemplateMetadata } from '@angular/compiler';

@Injectable({
    providedIn: 'root'
})
export class ComplexFormService {

    private currentCustomerId: number; // Refactor to state object
    private _complexFormSubject: BehaviorSubject<FormGroup>;
    complexForm$: Observable<FormGroup>;

    constructor(private _fb: FormBuilder,
                private _apiService: ComplexFormApiService) {
        const compleFormBuilder = new ComplexFormBuilder(this._fb);
        this._complexFormSubject = new BehaviorSubject<FormGroup>(
            this._fb.group(compleFormBuilder.build())
        );
        this.complexForm$ = this._complexFormSubject.asObservable();
    }


    loadCustomerForm(id: number): Observable<boolean> {
        return this._apiService.getCustomerDetailsById(id).pipe(
            map((dto) => {
                const complexFormBuilder = new ComplexFormBuilder(this._fb);
                const form = this._fb.group(
                    complexFormBuilder
                    .initFromDTO(dto)
                    .build()
                );
                this._complexFormSubject.next(form);
                this.currentCustomerId = dto.id;
                return true;
            })
        );
    }
}
