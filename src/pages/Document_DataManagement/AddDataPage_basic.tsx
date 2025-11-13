import React, { useState } from 'react';

const AddDataPage_basic: React.FC = () => {
  const [data, setData] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setError(''); // Clear any previous errors
    } else {
      setFile(null);
      setError('Please upload a valid PDF document.');
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!data || !file) {
      setError('Please provide all required fields.');
      return;
    }

    // You can implement actual upload logic here
    console.log('Data submitted:', data);
    console.log('File submitted:', file);

    // Reset the form
    setData('');
    setFile(null);
  };

  return (
    <div>
      <h1>Add Data</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="data">Data:</label>
          <input
            type="text"
            id="data"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="file">Upload PDF:</label>
          <input
            type="file"
            id="file"
            accept=".pdf"
            onChange={handleFileChange}
            required
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddDataPage_basic;