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
            <h3>Créer un client</h3>
            <CustomerForm handleCreateCustomer={handleCreateCustomer} />
        </>
    );
}

export default CreateCustomer;
