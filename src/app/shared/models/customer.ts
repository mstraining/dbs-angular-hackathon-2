import { Address } from './address';

export interface ICustomer {
    customerId: string;
    firstName: string;
    lastName: string;
    fullName: string;
    address: Address;
}
