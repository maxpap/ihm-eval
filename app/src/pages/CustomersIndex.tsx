import { useEffect, useState } from "react";
import { getCustomers } from "../api/supabase";
import CustomerList from "../components/CustomerList";
import { Link } from "react-router-dom";

const CustomersIndex = () => {

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers()
      .then((data) => {
        setCustomers(data);
      });
  }, []);

  return <>
    <h3>Liste des clients</h3>
    <Link to={"/create"}>Créer un client</Link>
    <CustomerList customers={customers} />
  </>
}

export default CustomersIndex;
