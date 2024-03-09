import { InvoiceFormProps } from "../types/props/InvoiceFormProps";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const InvoiceForm = ({ handleCreateInvoice, customerID }: InvoiceFormProps) => {

    const [total, setTotal] = useState("");
    const [status, setStatus] = useState("SENT");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const invoice = {
            customer_id: customerID,
            total: total,
            status: status
        };
        handleCreateInvoice(invoice);
    }

    return <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6">
        <div className="mb-4">
            <Input
                name="amount"
                value={total}
                onChange={(e) => setTotal(e.target.value)}
                placeholder="Montant de la facture"
            />
        </div>
        <div className="mb-4">
            <select
                name="status" value={status}
                onChange={(e) => setStatus(e.target.value)}
            >
                <option value="SENT">Envoyée</option>
                <option value="PAID">Payée</option>
            </select>
        </div>
        <div className="flex justify-end">
            <Button variant={"default"} type="submit" className="ml-2">Enregistrer la facture</Button>
        </div>
    </form >
}

export default InvoiceForm;