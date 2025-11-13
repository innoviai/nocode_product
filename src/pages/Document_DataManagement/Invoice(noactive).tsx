import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';

interface InvoiceProps {
  invoiceNumber: string;
  date: string;
  items: { description: string; quantity: number; price: number }[];
  totalAmount: number;
}

const Invoice: React.FC<InvoiceProps> = ({ invoiceNumber, date, items, totalAmount }) => {
  const invoiceRef = useRef<HTMLDivElement>(null);

  const saveAsPDF = () => {
    const doc = new jsPDF();

    // Add title and invoice details
    doc.setFontSize(20);
    doc.text('Invoice', 20, 20);
    doc.setFontSize(12);
    doc.text(`Invoice Number: ${invoiceNumber}`, 20, 30);
    doc.text(`Date: ${date}`, 20, 40);

    // Define starting Y position for the table
    const startY = 50;
    let currentY = startY;

    // Add table header
    doc.setFontSize(12);
    doc.text('Description', 20, currentY);
    doc.text('Quantity', 100, currentY);
    doc.text('Price', 140, currentY);
    currentY += 10; // Move down for the next row

    // Add table rows
    items.forEach(item => {
      doc.text(item.description, 20, currentY);
      doc.text(item.quantity.toString(), 100, currentY);
      doc.text(`$${item.price.toFixed(2)}`, 140, currentY);
      currentY += 10; // Move down for the next row
    });

    // Add total amount
    doc.text(`Total Amount: $${totalAmount.toFixed(2)}`, 20, currentY + 10);

    // Save the PDF
    doc.save(`invoice_${invoiceNumber}.pdf`);
  };

  const invoiceStyle: React.CSSProperties = {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  };

  const tableStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const thTdStyle: React.CSSProperties = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  };

  const thStyle: React.CSSProperties = {
    ...thTdStyle,
    backgroundColor: '#f2f2f2',
  };

  return (
    <div>
      <div ref={invoiceRef} style={invoiceStyle}>
        <h1 style={{ textAlign: 'center' }}>Invoice</h1>
        <p>Invoice Number: {invoiceNumber}</p>
        <p>Date: {date}</p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Description</th>
              <th style={thStyle}>Quantity</th>
              <th style={thStyle}>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td style={thTdStyle}>{item.description}</td>
                <td style={thTdStyle}>{item.quantity}</td>
                <td style={thTdStyle}>${item.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 style={{ textAlign: 'right' }}>Total Amount: ${totalAmount.toFixed(2)}</h2>
      </div>
      <button onClick={saveAsPDF} style={{ marginTop: '20px', padding: '10px 15px', fontSize: '16px' }}>
        Save as PDF
      </button>
    </div>
  );
};

export default Invoice;