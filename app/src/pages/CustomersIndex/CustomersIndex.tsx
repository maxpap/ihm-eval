import { useEffect, useState } from "react";
import { getCustomers } from "../../api/supabase";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { columns } from "./columns";
import Table from "../../components/Table";

const CustomersIndex = () => {

  const navigate = useNavigate();

  const [customers, setCustomers] = useState(undefined);

  const handleRowClick = (row: any) => {
    navigate("/" + row?.original?.id)
  }

  useEffect(() => {
    getCustomers()
      .then((data) => {
        setCustomers(data);
      });
  }, []);

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold pt-5 pl-5 pb-2">Liste des clients</h1>
          <p className="pl-5 pb-5">Voici la liste de tous les clients.</p>
        </div>
        <div className="pr-5">
          <Button asChild>
            <Link to={"/create"}>Créer un client</Link>
          </Button>
        </div>
      </div>
      <div className="pb-20">
        <Table data={customers} columns={columns} handleRowClick={handleRowClick} />
      </div>
    </>
  );
}

export default CustomersIndex;
