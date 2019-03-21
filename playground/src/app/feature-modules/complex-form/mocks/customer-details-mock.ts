import { CustomerDetailsDTO } from '../contracts/customer-details-dto';
import { getProductsList } from './product-list-mock';
import { getUsersList } from './users-list-mock';
import { getDomainsList } from './domains-list-mock';
import { CustomerDTO } from '../contracts/customer-dto';

export function getCustomerDetails(customer: CustomerDTO): CustomerDetailsDTO {
    return {
        ...customer,
        products: getProductsList()
                  .filter(product => product.id < 6),
        users:    getUsersList().filter(user => user.id < 6),
        domains:  getDomainsList().filter(domain => domain.id < 6)
    };
}
