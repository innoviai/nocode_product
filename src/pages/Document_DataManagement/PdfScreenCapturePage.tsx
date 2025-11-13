import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import PdfPreviewPage from './PdfPreviewPage';

const PdfLabelingModule = () => {
  const viewerRef = useRef(null);

  const captureScreenshot = async () => {
    if (viewerRef.current) {
      const canvas = await html2canvas(viewerRef.current);
      const imageDataUrl = canvas.toDataURL('image/png');
      
      // Create a link element to download the image
      const link = document.createElement('a');
      const now = new Date();
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
      const year = now.getFullYear();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      const timestamp = `${day}:${month}:${year}_${hours}:${minutes}:${seconds}`; // Format DD:MM:YYYY_hh:mm:ss
      
      link.href = imageDataUrl;
      link.download = `ScreenCapture_${timestamp}.png`; // Set the download filename
      document.body.appendChild(link);
      link.click(); // Trigger the download
      document.body.removeChild(link); // Clean up
    }
  };

  return (
    <div>
      <div ref={viewerRef} style={{ height: '500px', overflow: 'auto' }}>
        {/* Your react-pdf-viewer component goes here */}
        <PdfPreviewPage />
      </div>
      <button onClick={captureScreenshot}>Capture Screenshot</button>
    </div>
  );
};

export default PdfLabelingModule;