import React from 'react';
import Invoice from './Invoice';

const Invoice_ExportPdfPage: React.FC = () => {
  const invoiceData = {
    invoiceNumber: '12345',
    date: '2023-10-07',
    items: [
      { description: 'Widget A', quantity: 2, price: 29.99 },
      { description: 'Widget B', quantity: 1, price: 49.99 },
    ],
    totalAmount: 109.97,
  };

  return (
    <div>
      <Invoice
        invoiceNumber={invoiceData.invoiceNumber}
        date={invoiceData.date}
        items={invoiceData.items}
        totalAmount={invoiceData.totalAmount}
      />
    </div>
  );
};

export default Invoice_ExportPdfPage;