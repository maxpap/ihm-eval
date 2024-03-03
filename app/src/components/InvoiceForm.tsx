import { InvoiceFormProps } from "../types/props/InvoiceFormProps";
import { useState } from "react";

const InvoiceForm = ({ handleCreateInvoice, customerID }: InvoiceFormProps) => {

    const [total, setTotal] = useState("");
    const [status, setStatus] = useState("sent");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const invoice = {
            customer_id: customerID,
            total: total,
            status: status
        };
        handleCreateInvoice(invoice);
    }

    return <form onSubmit={handleSubmit}>
        <input
            type="number"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            placeholder="Montant de la facture"
        />
        <select
            name="Statut" value={status}
            onChange={(e) => setStatus(e.target.value)}
        >
            <option value="sent">Envoyée</option>
            <option value="paid">Payée</option>
        </select>
        <button type="submit">Enregistrer la facture</button>
    </form >
}

export default InvoiceForm;