import { Link } from "react-router-dom";
import { CustomerFormProps } from "../types/props/CustomerFormProps";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

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

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6">
            <div className="mb-4">
                <Input
                    type="text"
                    name="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e?.target?.value)}
                    placeholder="Nom complet"
                />
            </div>
            <div className="mb-4">
                <Input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e?.target?.value)}
                    placeholder="Email"
                />
            </div>
            <div className="flex justify-end">
                <Button variant={"destructive"} asChild>
                    <Link to={"/"}>Annuler</Link>
                </Button>
                <Button variant={"default"} type="submit" className="ml-2">Enregistrer</Button>
            </div>
        </form>
    );
}

export default CustomerForm;