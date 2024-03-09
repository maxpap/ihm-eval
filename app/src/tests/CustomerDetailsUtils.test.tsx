import { invoiceDataParser } from "@/pages/CustomerDetails/CustomerDetailsUtils";
import { Invoice } from "@/types/Invoice";

describe("invoiceDataParser function", () => {
    it("should parse invoice data correctly", () => {
        const invoices: Invoice[] = [
            { id: "1", customer_id: 1, total: "100", status: "PAID" },
            { id: "2", customer_id: 2, total: "200", status: "SENT" },
            { id: "3", customer_id: 3, total: "150", status: "" }
        ];

        const parsedData = invoiceDataParser(invoices);
        console.log(parsedData)
        expect(parsedData).toEqual([
            { id: "1", total: "100", status: "Payée" },
            { id: "2", total: "200", status: "Envoyée" },
            { id: "3", total: "150", status: "Autre" }
        ]);
    });
});