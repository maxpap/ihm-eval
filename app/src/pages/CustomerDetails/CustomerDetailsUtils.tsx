import { Invoice } from "@/types/Invoice";

export const invoiceDataParser = (invoices: Invoice[]) => {
    return invoices.map(item => ({
        id: item?.id,
        total: item?.total,
        status: getStatusLabel(item.status)
    }));

}

const getStatusLabel = (status: string) => {
    switch (status) {
        case "PAID":
            return "Payée";
        case "SENT":
            return "Envoyée";
        default:
            return "Autre";
    }
}