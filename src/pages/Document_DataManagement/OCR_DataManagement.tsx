import React from 'react';
import TerrsactTableEditor from './TerrsactTableEditor';

const OCR_DataManagement: React.FC = () => {
    const imageUrl = '../data/image/water_bill_statement.png'; // Replace with your image URL

    return (
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div style={{ flex: '0 0 35%' }}>
                <img src={imageUrl} alt="OCR" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div style={{ flex: '1', paddingLeft: '20px' }}>
                <h2>Terrsact OCR Table Editor</h2>
                <TerrsactTableEditor />
                <h2>Paddle OCR Table Editor</h2>
                <TerrsactTableEditor />
            </div>
        </div>
    );
};

export default OCR_DataManagement;