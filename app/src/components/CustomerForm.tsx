import { Link } from "react-router-dom";
import { CustomerFormProps } from "../types/props/CustomerFormProps";
import { useState } from "react";

const CustomerForm = ({ handleCreateCustomer }: CustomerFormProps) => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const customer = {
            fullName: fullName,
            email: email
        };
        handleCreateCustomer(customer);
    }

    return <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Nom complet"
        />
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
        />
        <Link to={"/"}>Annuler</Link>
        <button type="submit">Enregistrer</button>
    </form>
}

export default CustomerForm;