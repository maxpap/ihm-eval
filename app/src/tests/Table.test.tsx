import { render, fireEvent, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import Table from '../components/Table';
import { Customer } from '@/types/Customer';
import { ColumnDef } from '@tanstack/react-table';
import { Invoice } from '@/types/Invoice';

const customers: Customer[] = [
    { id: "1", fullName: 'Maxou Papazian', email: 'maxou@mail.com' },
    { id: "2", fullName: 'Papazian Maxou', email: 'papazian@mail.com' },
];

const columns: ColumnDef<Customer | Invoice>[] = [
    {
        accessorKey: "fullName",
        header: "Nom complet",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
]

describe("Table Component", () => {
    it("should render customers given in props", async () => {
        render(<BrowserRouter>
            <Table data={customers} columns={columns} />
        </BrowserRouter>);

        const items = await screen.getAllByText("Maxou Papazian", { exact: false });
        expect(items).toHaveLength(1);
    })


    it("should call onRowClick on a click", async () => {
        const onRowClick = jest.fn();

        render(<BrowserRouter>
            <Table data={customers} columns={columns} handleRowClick={onRowClick} />
        </BrowserRouter>);

        fireEvent.click(screen.getByText('Maxou Papazian'));
        expect(onRowClick).toHaveBeenCalled();
    })
})