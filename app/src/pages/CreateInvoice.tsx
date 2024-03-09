import { useNavigate, useParams } from "react-router-dom";
import InvoiceForm from "../components/InvoiceForm";
import { Invoice } from "../types/Invoice";
import { postInvoice } from "../api/supabase";

const CreateInvoice = () => {

  const navigate = useNavigate();

  const params = useParams();
  const id = +params.id!;

  const handleCreateInvoice = (invoice: Invoice) => {
    postInvoice(invoice)
      .then(() =>
        navigate(`/${id}`)
      );
  }

  return <>

    <div className="pt-5 text-center">
      <h1 className="text-3xl font-bold pb-2">Créer une facture</h1>
      <p>Créez une facture en remplissant ce formulaire.</p>
    </div>
    <InvoiceForm handleCreateInvoice={handleCreateInvoice} customerID={id} />
  </>
}

export default CreateInvoice;
