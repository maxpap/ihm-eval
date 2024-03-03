import { useNavigate, useParams } from "react-router-dom";
import InvoiceForm from "../components/InvoiceForm";
import { Invoice } from "../types/Invoice";
import { postInvoice } from "../api/supabase";

const CreateInvoice = () => {

  const navigate = useNavigate();

  const params = useParams();
  const id = +params.idcustomer!;

  const handleCreateInvoice = (invoice: Invoice) => {
    postInvoice(invoice)
      .then(() =>
        navigate(`/${id}`)
      );
  }

  return <>
    <h3>Créer une facture</h3>
    <InvoiceForm handleCreateInvoice={handleCreateInvoice} customerID={id} />
  </>
}

export default CreateInvoice;
