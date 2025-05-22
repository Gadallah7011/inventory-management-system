// src/pages/SKUSearch.js
import React, { useState } from 'react';
import './SKUSearch.css';

function SKUSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  // بيانات وهمية للتجريب (يمكن استبدالها ببيانات حقيقية من API أو state مشترك)
  const sampleData = [
    { sku: 'SKU123', name: 'Item A', category: 'Electronics' },
    { sku: 'SKU456', name: 'Item B', category: 'Clothing' },
    { sku: 'SKU789', name: 'Item C', category: 'Electronics' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = sampleData.filter(
      item =>
        item.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="search-container">
      <h2>SKU Search</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by SKU, Name, or Category"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {results.length > 0 && (
        <div className="results">
          <h3>Search Results:</h3>
          <ul>
            {results.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong> - {item.category} - SKU: {item.sku}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SKUSearch;
