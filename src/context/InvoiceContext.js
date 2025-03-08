import { createContext, useState, useEffect } from "react";

export const InvoiceContext = createContext();

const InvoiceProvider = ({ children }) => {
  const [invoices, setInvoices] = useState([]);

  // Fetch invoices from local JSON file
  useEffect(() => {
    fetch("/invoices.json")
      .then((res) => res.json())
      .then((data) => setInvoices(data))
      .catch((error) => console.error("Error loading invoices:", error));
  }, []);

  // Add Invoice
  const addInvoice = (newInvoice) => {
    setInvoices([...invoices, { ...newInvoice, id: Date.now().toString() }]);
  };

  // Edit Invoice
  const editInvoice = (updatedInvoice) => {
    setInvoices(invoices.map((inv) => (inv.id === updatedInvoice.id ? updatedInvoice : inv)));
  };

  // Delete Invoice
  const deleteInvoice = (id) => {
    setInvoices(invoices.filter((inv) => inv.id !== id));
  };

  return (
    <InvoiceContext.Provider value={{ invoices, addInvoice, editInvoice, deleteInvoice }}>
      {children}
    </InvoiceContext.Provider>
  );
};

export default InvoiceProvider;
