import { Link } from "react-router-dom";
import { CustomerListProps } from "../types/props/CustomerListProps";

const CustomerList = ({ customers }: CustomerListProps) => {
    return customers ? <>
        <ul>
            {customers.map(item => <li key={item.id}>
                <label>
                    {item.fullName}
                    <Link to={"/" + item.id}>Details</Link>
                </label>
            </li>)}
        </ul>
    </> : <p>Chargement en cours...</p>
}

export default CustomerList;