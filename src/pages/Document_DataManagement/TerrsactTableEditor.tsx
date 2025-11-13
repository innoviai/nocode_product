import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Menu,
  MenuItem
} from '@mui/material';

const TerrsactTableEditor: React.FC = () => {
  const [rows, setRows] = useState<number>(0);
  const [columns, setColumns] = useState<number>(0);
  const [tableData, setTableData] = useState<string[][]>([]);
  const [csvFileName, setCsvFileName] = useState<string>('pdf_label_Structure.csv');
  const [headers, setHeaders] = useState<string[]>([]);
  
  // State for context menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedCellText, setSelectedCellText] = useState<string>('');

  const csvFileUrl = '../data/pdf_label_Structure.csv';

  useEffect(() => {
    const fetchCSVData = async () => {
      try {
        const response = await fetch(csvFileUrl);
        const text = await response.text();
        const parsedData = parseCSV(text);
        setTableData(parsedData.data);
        setHeaders(parsedData.headers);
      } catch (error) {
        console.error('Error fetching the CSV file:', error);
      }
    };

    fetchCSVData();
  }, []);

  const handleGenerateTable = () => {
    const newTableData = Array.from({ length: rows }, () => Array(columns).fill(''));
    setTableData(newTableData);
    setHeaders(Array.from({ length: columns }, (_, index) => `Header ${index + 1}`));
  };

  const handleChange = (rowIndex: number, colIndex: number, value: string) => {
    const newData = tableData.map((row, rIndex) =>
      rIndex === rowIndex ? row.map((cell, cIndex) => (cIndex === colIndex ? value : cell)) : row
    );
    setTableData(newData);
  };

  const handleDeleteRow = (rowIndex: number) => {
    const newData = tableData.filter((_, rIndex) => rIndex !== rowIndex);
    setTableData(newData);
  };

  const handleAddRow = () => {
    setTableData([...tableData, Array(columns).fill('')]);
  };

  const handleDownloadCSV = () => {
    const csvContent = [
      headers.join(','),
      ...tableData.map(row => row.join(','))
    ].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', csvFileName);
    link.click();
  };

  const handleExportToJSON = () => {
    const jsonData = JSON.stringify({ headers, data: tableData });
    const jsonFileName = `${csvFileName.split('.').slice(0, -1).join('.')}.json`;
    const blob = new Blob([jsonData], { type: 'application/json;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', jsonFileName);
    link.click();
  };

  const handleHeaderChange = (colIndex: number, value: string) => {
    const newHeaders = headers.map((header, index) => (index === colIndex ? value : header));
    setHeaders(newHeaders);
  };

  const parseCSV = (text: string) => {
    const rows = text.split('\n').map(row => row.split(','));
    const headers = rows[0];
    const data = rows.slice(1);
    return { headers, data };
  };

  // Context menu handlers
  const handleCellContextMenu = (event: React.MouseEvent, cellText: string) => {
    event.preventDefault(); // Prevent the default context menu
    setSelectedCellText(cellText);
    setAnchorEl(event.currentTarget); // Set the anchor for the menu
  };

  const handleCloseMenu = () => {
    setAnchorEl(null); // Close the menu
  };

  return (
    <div style={{ fontSize: '8px' }}>
      <div>
        <Button variant="outlined" onClick={() => {}} style={{ marginLeft: '10px' }}>
          Zoom In
        </Button>
        <Button variant="outlined" onClick={() => {}} style={{ marginLeft: '10px' }}>
          Zoom Out
        </Button>
      </div>

      {tableData.length > 0 && (
        <div>
          <TableContainer component={Paper} style={{ marginTop: '20px' }}>
            <Table>
              <TableHead>
                <TableRow>
                  {headers.map((header, index) => (
                    <TableCell key={index} style={{ padding: '0' }}>
                      <TextField
                        value={header}
                        onChange={(e) => handleHeaderChange(index, e.target.value)}
                        variant="outlined"
                        fullWidth
                        InputProps={{ style: { padding: '0' } }}
                      />
                    </TableCell>
                  ))}
                  <TableCell style={{ padding: '0' }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row, rowIndex) => (
                  <TableRow key={rowIndex}>
                    {row.map((cell, colIndex) => (
                      <TableCell key={colIndex} style={{ padding: '0' }} onContextMenu={(e) => handleCellContextMenu(e, cell)}>
                        <TextField
                          value={cell}
                          onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                          variant="outlined"
                          fullWidth
                          InputProps={{ style: { padding: '0' } }}
                        />
                      </TableCell>
                    ))}
                    <TableCell style={{ padding: '0' }}>
                      <Button variant="outlined" color="secondary" onClick={() => handleDeleteRow(rowIndex)}>
                        Delete Row
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button variant="contained" color="primary" onClick={handleAddRow} style={{ marginTop: '10px' }}>
            Add Row
          </Button>
          <Button variant="contained" color="success" onClick={handleDownloadCSV} style={{ marginTop: '10px', marginLeft: '10px' }}>
            Download CSV
          </Button>
          <Button variant="contained" color="info" onClick={handleExportToJSON} style={{ marginTop: '10px', marginLeft: '10px' }}>
            Export to JSON
          </Button>

          {/* Context Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={handleCloseMenu}>
              {selectedCellText} {/* Display the full text of the cell */}
            </MenuItem>
          </Menu>
        </div>
      )}
    </div>
  );
};

export default TerrsactTableEditor;