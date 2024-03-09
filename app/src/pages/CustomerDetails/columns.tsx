import { Customer } from "@/types/Customer";
import { Invoice } from "@/types/Invoice";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Customer | Invoice>[] = [
    {
        accessorKey: "total",
        header: "Total",
    },
    {
        accessorKey: "status",
        header: "Statut",
    },
];