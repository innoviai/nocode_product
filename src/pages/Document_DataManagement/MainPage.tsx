import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import '../css/DataAssetsManagement.css';

const MainPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [dataAssets, setDataAssets] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    fetch('../data/owndocumentdata.csv')
      .then(response => response.text())
      .then(text => {
        const lines = text.split('\n');
        const headers = lines[0].split(',');
        const data = lines.slice(1).map(line => {
          const values = line.split(',');
          const asset: any = {};
          headers.forEach((header, index) => {
            asset[header.trim()] = values[index] ? values[index].trim() : '';
          });
          return asset;
        });
        setDataAssets(data);
      })
      .catch(error => {
        console.error('Error fetching or parsing CSV:', error);
      });
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
  };

  const handleSortToggle = () => {
    setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const openPdfPreview = (url: string) => {
    setPdfUrl(url);
    setIsModalOpen(true);
  };

  const filteredData = dataAssets.filter(asset => 
    asset.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedType ? asset.type === selectedType : true)
  );

  const sortedData = filteredData.sort((a, b) => {
    const dateA = new Date(a.lastModified);
    const dateB = new Date(b.lastModified);
    return sortOrder === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
  });

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const paginatedData = sortedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const router = useRouter();

  return (
    <div className="data-assets-management">
      <aside className="sidebar">
        <nav>
          <ul>
            <li>Use Case management</li>
            <li>Use Case assets</li>
            <li className="active">Data assets</li>
            <li>Vector databases</li>
            <li>Experiments</li>
            <li>Playgrounds</li>
            <li>Notebooks & codespaces</li>
            <li>Applications</li>
            <li>Deployments</li>
            <li>Registered models</li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header className="header">
          <h1>Use Case directory / 10K Diabetes</h1>
        </header>

        <section className="data-section">
          <h2>Data</h2>
          <div className="controls">
            <div className="filter-container">
              <select value={selectedType} onChange={handleTypeChange} className="filter-dropdown">
                <option value="">All Types</option>
                <option value="Snapshot">PDF Document</option>
                <option value="Wrangling">Invoice</option>
                <option value="Static">Water Bill</option>
                <option value="Feature Discovery">Electricity Bill</option>
                <option value="SQL">SQL</option>
              </select>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-input"
              />
            </div>
            <div className="add-data-button">
              <button onClick={() => router.push('./AddDataPage')}>Add Data</button>
            </div>
          </div>

          <table className="assets-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Created By</th>
                <th onClick={handleSortToggle} style={{ cursor: 'pointer' }}>
                  Last Modified {sortOrder === 'asc' ? '↑' : '↓'}
                </th>
                <th>Type</th>
                <th>Source</th>
                <th>Rows</th>
                <th>Features</th>
                <th>Size</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((asset, index) => (
                <tr key={index}>
                  <td>{asset.name}</td>
                  <td>{asset.createdBy}</td>
                  <td>{asset.lastModified}</td>
                  <td>{asset.type}</td>
                  <td>{asset.source}</td>
                  <td>{asset.rows}</td>
                  <td>{asset.features}</td>
                  <td>{asset.size}</td>
                  <td>
                    <button className="action-menu-button">...</button>
                    <div className="action-menu">
                      <button>Edit dataset name</button>
                      <button onClick={() => router.push('./OCR_DataManagement')}>OCR</button>
                      <button onClick={() => openPdfPreview(asset.link)}>PDF Preview</button>
                      <button>Explore</button>
                      <button>Open in Wrangler</button>
                      <button>Open in SQL Editor</button>
                      <button>Feature Discovery</button>
                      <button>Start modeling</button>
                      <button>Remove from Use Case</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>Previous</button>
            <span>{currentPage} of {totalPages}</span>
            <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}>Next</button>
            <select value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))}>
              <option value={20}>20 per page</option>
              <option value={50}>50 per page</option>
              <option value={100}>100 per page</option>
            </select>
            <span>{`Showing ${Math.min((currentPage - 1) * itemsPerPage + 1, sortedData.length)} - ${Math.min(currentPage * itemsPerPage, sortedData.length)} of ${sortedData.length} items`}</span>
          </div>
        </section>
      </main>

      {isModalOpen && (
        <div className="modal-overlay">
            <div className="modal-content" style={{ width: '1024px' }}>
            <button className="close-modal" onClick={() => setIsModalOpen(false)}>✖</button>
            <iframe src={pdfUrl} width="100%" height="600" frameBorder="0"></iframe>
            </div>
        </div>
        )}
    </div>
  );
};

export default MainPage;