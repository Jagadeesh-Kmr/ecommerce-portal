import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { InvoiceContext } from "../../../context/InvoiceContext"; 
import "./index.css"; // Ensure you have styles

const InvoiceDetail = () => {
  const { id } = useParams(); // Get invoice ID from URL
  const { invoices } = useContext(InvoiceContext);
  
  // Find the invoice by ID
  const invoice = invoices.find((inv) => inv.id === id);

  if (!invoice) {
    return <p>Invoice not found!</p>;
  }

  // Calculate total without tax and with tax
  const totalWithoutTax = invoice.items.reduce((sum, item) => sum + item.dealPrice * item.quantity, 0);
  const totalWithTax = invoice.items.reduce(
    (sum, item) => sum + (item.dealPrice * item.quantity * (1 + item.tax / 100)),
    0
  );

  return (
    <div className="invoice-detail-container">
      <h2>Invoice Details</h2>
      <p><strong>Store:</strong> {invoice.storeName}</p>
      <p><strong>Order ID:</strong> {invoice.orderId}</p>
      <p><strong>Date:</strong> {invoice.date}</p>

      <h3>Items</h3>
      <ul className="invoice-items">
        {invoice.items.map((item, index) => (
          <li key={index} className="invoice-item">
            <p><strong>Product:</strong> {item.productName}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Regular Price: ₹{item.regularPrice}</p>
            <p>Deal Price: ₹{item.dealPrice}</p>
            <p>Tax: {item.tax}%</p>
          </li>
        ))}
      </ul>

      <h3>Total</h3>
      <p><strong>Subtotal (Before Tax):</strong> ₹{totalWithoutTax.toFixed(2)}</p>
      <p><strong>Total (After Tax):</strong> ₹{totalWithTax.toFixed(2)}</p>

      <Link to="/invoices" className="back-button">Back to Invoices</Link>
    </div>
  );
};

export default InvoiceDetail;
