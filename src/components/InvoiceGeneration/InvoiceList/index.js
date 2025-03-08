import { useState, useEffect } from "react";

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3004/invoices")
    .then(response => response.json()) // No need for .text()
    .then(data => setInvoices(data))
    .catch(error => console.error("Error fetching invoices:", error));
  }, []);
  

  if (loading) return <p>Loading invoices...</p>;

  return (
    <div>
      <h2>Invoices</h2>
      {invoices.length === 0 ? (
        <p>No invoices found</p>
      ) : (
        <ul>
          {invoices.map((invoice) => (
            <li key={invoice.id}>
              <strong>Order ID:</strong> {invoice.orderId},  
              <strong> Store:</strong> {invoice.storeName},  
              <strong> Date:</strong> {invoice.date},  
              <strong> Quantity:</strong> {invoice.quantity},  
              <strong> Total:</strong> ${invoice.itemTotal}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InvoiceList;
