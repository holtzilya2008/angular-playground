import { CustomerDTO } from './customer-dto';

export interface UpdateCustomerDetailsDTO extends CustomerDTO {
    productIds: number[];
    userIds: number[];
    domainIds: number[];
}
