import { CustomerDTO } from './customer-dto';
import { ProductDTO } from './product-dto';
import { UserDTO } from './user-dto';
import { DomainDTO } from './domain-dto';

export interface CustomerDetailsDTO extends CustomerDTO {
    products: ProductDTO[];
    users: UserDTO[];
    domains: DomainDTO[];
}
