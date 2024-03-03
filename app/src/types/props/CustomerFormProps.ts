import { Customer } from "../Customer";

export type CustomerFormProps = {
    handleCreateCustomer: (customer: Customer) => void,
}