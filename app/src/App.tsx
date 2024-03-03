import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateCustomer from "./pages/CreateCustomer";
import CustomerDetails from "./pages/CustomerDetails";
import CustomersIndex from "./pages/CustomersIndex";
import CreateInvoice from "./pages/CreateInvoice";

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route
        path="/create"
        element={<CreateCustomer />}
      />
      <Route
        path="/:idcustomer"
        element={<CustomerDetails />}
      />
      <Route
        path="/"
        element={<CustomersIndex />}
      />
      <Route
        path="/:idcustomer/invoices/add"
        element={<CreateInvoice />}
      />
    </Routes>
  </BrowserRouter>
}

export default App
