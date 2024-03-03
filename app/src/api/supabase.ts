import { Customer } from "../types/Customer";
import { Invoice } from "../types/Invoice";

const SUPABASE_CUSTOMERS_URL = "https://gqbxsespvqsjjsdcyful.supabase.co/rest/v1/customers";
const SUPABASE_INVOICES_URL = "https://gqbxsespvqsjjsdcyful.supabase.co/rest/v1/invoices";
const SUPABASE_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxYnhzZXNwdnFzampzZGN5ZnVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzNTMyOTAsImV4cCI6MjAyMzkyOTI5MH0.x2ZEdWlv-cSQ0EdpCAcYj11_7f8DJ3dT90kcCrDib-Q";

export const postInvoice = (invoice: Invoice) => {
    return fetch(SUPABASE_INVOICES_URL, {
        method: "POST",
        body: JSON.stringify(invoice),
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        },
    })
        .then((response) => response.json())
        .then(items => items[0]);
}

export const postCustomer = (customer: Customer) => {
    return fetch(SUPABASE_CUSTOMERS_URL, {
        method: "POST",
        body: JSON.stringify(customer),
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        },
    })
        .then((response) => response.json())
        .then(items => items[0]);
}

export const getCustomers = () => {
    return fetch(`${SUPABASE_CUSTOMERS_URL}?order=created_at`, {
        headers: {
            apiKey: SUPABASE_API_KEY,
        },
    }).then((response) => response.json())
}

export const getCustomer = (id: number | undefined) => {
    return fetch(`${SUPABASE_CUSTOMERS_URL}?id=eq.${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        }
    })
        .then(response => response.json())
        .then(customer => customer[0]);
}

export const getInvoice = (id: number | undefined) => {
    return fetch(`${SUPABASE_INVOICES_URL}?customer_id=eq.${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            apiKey: SUPABASE_API_KEY,
            Prefer: "return=representation",
        }
    })
        .then(response => response.json())
        .then(invoice => invoice);
}