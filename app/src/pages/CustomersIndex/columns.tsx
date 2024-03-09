import { Customer } from "@/types/Customer";
import { Invoice } from "@/types/Invoice";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Customer | Invoice>[] = [
    {
        accessorKey: "fullName",
        header: "Nom complet",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
]