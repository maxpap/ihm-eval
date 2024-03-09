import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCustomer, getInvoice } from "../../api/supabase";
import { Customer } from "../../types/Customer";
import { Button } from "@/components/ui/button";
import Table from "../../components/Table";
import { columns } from "./columns";
import { invoiceDataParser } from "./CustomerDetailsUtils";

const CustomerDetails = () => {

  const [customer, setCustomer] = useState<Customer>();
  const [invoices, setInvoices] = useState([]);

  const params = useParams();
  const id = +params.id!;

  useEffect(() => {
    Promise.all([
      getCustomer(Number(id)),
      getInvoice(Number(id))
    ]).then(([customer, invoices]) => {
      setCustomer(customer);
      setInvoices(invoices);
    }).catch(error => {
      console.error("Erreur lors de la récupération des données :", error);
    });
  }, [id])

  return customer ? (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold pt-5 pl-5 pb-2">Fiche de {customer?.fullName}</h1>
          <p className="pl-5 pb-5">({customer?.email})</p>
        </div>
        <div className="flex space-x-3 pr-5">
          <Button variant={"outline"} asChild>
            <Link to="/">Retour aux clients</Link>
          </Button>
          <Button asChild>
            <Link to={`/${id}/invoices/add`}>Créer une facture</Link>
          </Button>
        </div>
      </div>
      <Table data={invoices} columns={columns} dataParser={invoiceDataParser} noData="Aucune facture." />
    </>
  ) : (
    null
  );
}

export default CustomerDetails;
