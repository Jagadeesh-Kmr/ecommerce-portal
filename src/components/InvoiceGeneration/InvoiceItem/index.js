const InvoiceItem = ({ item }) => {
    return (
      <li>
        <strong>{item.name}</strong> - {item.quantity} x ₹{item.dealPrice} (Tax: ₹{item.tax})
      </li>
    );
  };
  
  export default InvoiceItem;
  