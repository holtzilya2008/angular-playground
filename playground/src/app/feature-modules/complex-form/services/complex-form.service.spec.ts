import { TestBed } from '@angular/core/testing';

import { ComplexFormService } from './complex-form.service';
import { FormBuilder } from '@angular/forms';
import { ICustomerDetailsForm } from '../contracts/customer-details-form-interface';
import { ComplexFormApiService } from './complex-form-api.service';

describe('ComplexFormService', () => {
    let service: ComplexFormService;

    beforeEach(() => {
        service = new ComplexFormService(new FormBuilder(), new ComplexFormApiService());
    });

    it('Should initialize an empty complex form as the first value of the BehaviourSubject', () => {
        service.complexForm$.subscribe( (form) => {
            expect(form).toBeDefined();
            expect(form.controls).toBeDefined();
        });
    });

    it('Should initialize the form with empty valid customer details form', () => {
        const expectedValue: ICustomerDetailsForm = {
            name: '',
            description: '',
            email: ''
        };

        service.complexForm$.subscribe( (form) => {
            expect(form.controls.customerDetailsForm.value).toEqual(expectedValue);
        });
    });

    it('Should initialize the form with empty users list', () => {

        service.complexForm$.subscribe( (form) => {
            expect(form.get('usersList')).toBeDefined();
            expect(form.get('usersList').value).toEqual([]);
        });
    });

    it('Should initialize the form with empty users and somains arrays', () => {

        service.complexForm$.subscribe( (form) => {
            expect(form.get('domainsList')).toBeDefined();
            expect(form.get('domainsList').value).toEqual([]);
        });
    });
});
