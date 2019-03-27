import { Injectable } from '@angular/core';
import { CustomerDetailsDTO } from '../contracts/customer-details-dto';
import { of, Observable, throwError } from 'rxjs';
import { getCustomers } from '../mocks/customers-list-mock';
import { getCustomerDetails } from '../mocks/customer-details-mock';

@Injectable({
  providedIn: 'root'
})
export class ComplexFormApiService {
  constructor() { }

  getCustomerDetailsById(id: number): Observable<CustomerDetailsDTO> {
    const allCustomers = getCustomers();
    const customer = allCustomers.find(c => c.id === id);
    if (customer) {
        return of (getCustomerDetails(customer));
    } else {
        return throwError(new Error('customer not found'));
    }
  }
}
