import { TableProps } from "../types/props/TableProps";
import { DataTable } from "./ui/DataTable";

const Table = ({ data, columns, handleRowClick, dataParser, noData }: TableProps) => {

    if (dataParser) {
        data = dataParser(data)
    }

    return data ? <>
        <DataTable
            columns={columns}
            data={data}
            onRowClick={handleRowClick}
            tableCaption={"C'est fini :("}
            noData={noData}
        />
    </> : null

}

export default Table;