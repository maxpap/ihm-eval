import { ColumnDef } from "@tanstack/react-table"
import { Customer } from "../Customer"
import { Invoice } from "../Invoice"

export type TableProps = {
    data: (Customer | Invoice)[] | undefined,
    columns: ColumnDef<Customer | Invoice>[]
    handleRowClick?: any//(row: Row<TData>) => void
    dataParser?: any
    noData?: string
}