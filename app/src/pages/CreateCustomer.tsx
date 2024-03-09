import CustomerForm from "../components/CustomerForm";
import { postCustomer } from "../api/supabase";
import { Customer } from "../types/Customer";
import { useNavigate } from "react-router-dom";

const CreateCustomer = () => {

    const navigate = useNavigate();

    const handleCreateCustomer = (customer: Customer) => {
        postCustomer(customer)
            .then(() =>
                navigate("/")
            );
    }

    return (
        <>
            <div className="pt-5 text-center">
                <h1 className="text-3xl font-bold pb-2">Créer un client</h1>
                <p>Créez un nouveau client en remplissant ce formulaire.</p>
            </div>
            <CustomerForm handleCreateCustomer={handleCreateCustomer} />
        </>
    );
}

export default CreateCustomer;
