import * as React from 'react';
import { useRouter } from 'next/router';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const PdfPreviewPage = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const [selectedPdf, setSelectedPdf] = React.useState("/guidance_climate_disclosures.pdf");
    const [selectedCategory, setSelectedCategory] = React.useState("all");

    const pdfFiles = [
        { name: 'HKEX Guidance on Climate Disclosures', url: '/guidance_climate_disclosures.pdf', category: 'ESG' },
        { name: 'BocoToys_v1.1.pdf', url: '/BocoToys_v1.1.pdf', category: 'Deck' },
        { name: '251028-Finch-_-AI-FinAgent-Pitch-Deck.pdf', url: '/251028-Finch-_-AI-FinAgent-Pitch-Deck.pdf', category: 'Deck' },
        { name: 'Deck_intonate.pdf', url: '/Deck_intonate.pdf', category: 'Deck' },
        { name: 'nextesy-pitch-seed.pdf', url: '/nextesy-pitch-seed.pdf', category: 'Deck' },
        { name: 'Octotronic_PitchDeck.pdf', url: '/Octotronic_PitchDeck.pdf', category: 'Deck' },
        { name: 'Sentinus_Investor_presentation_2025.pdf', url: '/Sentinus_Investor_presentation_2025.pdf', category: 'Deck' },
        { name: 'Financial Statement Q1', url: '/financial_statement_q1.pdf', category: 'Finance' },
        { name: 'Environmental Report', url: '/environmental_report.pdf', category: 'Climate' },
        { name: 'Toy Safety Guidelines', url: '/toy_safety_guidelines.pdf', category: 'Toys' },
    ];

    const categories = Array.from(new Set(pdfFiles.map(pdf => pdf.category)));

    const handlePdfChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedPdf(event.target.value as string);
    };

    const handleCategoryChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedCategory(event.target.value as string);
    };

    const filteredPdfFiles = selectedCategory === "all"
        ? pdfFiles
        : pdfFiles.filter(pdf => pdf.category === selectedCategory);

    const router = useRouter();

    return (
        <Container maxWidth="md">
            <button onClick={() => router.push('./PdfScreenCapturePage')}>PDF Screen Capture</button>
            <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel id="category-select-label">Select Category</InputLabel>
                <Select
                    labelId="category-select-label"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    label="Select Category"
                >
                    <MenuItem value="all">All</MenuItem>
                    {categories.map((category) => (
                        <MenuItem key={category} value={category}>
                            {category}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel id="pdf-select-label">Select PDF</InputLabel>
                <Select
                    labelId="pdf-select-label"
                    value={selectedPdf}
                    onChange={handlePdfChange}
                    label="Select PDF"
                >
                    {filteredPdfFiles.map((pdf) => (
                        <MenuItem key={pdf.url} value={pdf.url}>
                            {pdf.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js">
                <div
                    style={{
                        height: '750px',
                        width: '100%',
                        margin: '0 auto',
                    }}
                >
                    <Viewer fileUrl={selectedPdf} plugins={[defaultLayoutPluginInstance]} />
                </div>
            </Worker>
        </Container>
    );
};

export default PdfPreviewPage;