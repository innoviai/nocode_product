import React from 'react';
import { jsPDF } from 'jspdf';

const WaterBill: React.FC = () => {
    //Get content from python backend using paddle ocr
    const content = [
        ['Item', 'Quantity', 'Unit Price', 'Total'],
        ['Water Usage', '1000', '$0.01', '$10.00'],
        ['Sewer Charge', '1000', '$0.005', '$5.00'],
        ['Total Due', '', '', '$15.00'],
    ];

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

    //assign our own style from Invoice.tsx
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
        //Get html structure from python backend using paddle ocr
        <html>
            <body>
                <table>
                    <tbody>
                        <tr>
                            <td>{content[0][0]}</td>
                            <td>{content[0][1]}</td>
                            <td>{content[0][2]}</td>
                            <td>{content[0][3]}</td>
                        </tr>
                        <tr>
                            <td>{content[1][0]}</td>
                            <td>{content[1][1]}</td>
                            <td>{content[1][2]}</td>
                            <td>{content[1][3]}</td>
                        </tr>
                        <tr>
                            <td>{content[2][0]}</td>
                            <td>{content[2][1]}</td>
                            <td>{content[2][2]}</td>
                            <td>{content[2][3]}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>{content[3][0]}</td>
                            <td colSpan={2}>{content[3][3]}</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={saveAsPDF} style={{ marginTop: '20px', padding: '10px 15px', fontSize: '16px' }}>
                    Save as PDF
                </button>
            </body>
        </html>
    );
};

export default WaterBill;