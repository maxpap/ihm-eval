import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCustomer, getInvoice } from "../api/supabase";
import { Customer } from "../types/Customer";
import { Invoice } from "../types/Invoice";

const CustomerDetails = () => {

  const [customer, setCustomer] = useState<Customer>();
  const [invoices, setInvoices] = useState<[Invoice]>();

  const params = useParams();
  const id = +params.idcustomer!;

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

  return customer ?
    <>
      <h3>Fiche de {customer?.fullName}</h3>
      <h4>({customer?.email})</h4>
      <Link to="/">Retour aux clients</Link>
      <table>
        <tbody>
          {invoices?.map(invoice => (
            <tr key={invoice.id}>
              <td>{invoice?.total} €</td>
              <td>{invoice?.status == "paid" ?
                "Payée" :
                invoice?.status == "sent" ?
                  "Envoyée" :
                  "Autre"
              }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={`/${id}/invoices/add`}>Créer une facture</Link>
    </>
    :
    <p>Chargement en cours...</p>
}

export default CustomerDetails;
