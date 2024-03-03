import { Invoice } from "../Invoice";

export type InvoiceFormProps = {
    customerID: number,
    handleCreateInvoice: (invoice: Invoice) => void,
}