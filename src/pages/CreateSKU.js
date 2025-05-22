import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './CreateSKU.css';

function CreateSKU() {
  const [itemName, setItemName] = useState('');
  const [skuMode, setSkuMode] = useState('auto'); // 'auto' or 'manual'
  const [skuCode, setSkuCode] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [brandName, setBrandName] = useState('');
  const [generatedSKU, setGeneratedSKU] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalSkuCode = skuMode === 'auto' ? `SKU-${uuidv4().slice(0, 8).toUpperCase()}` : skuCode;

    const skuObject = {
      id: uuidv4(),
      itemName,
      skuCode: finalSkuCode,
      category,
      subcategory,
      brandName,
    };

    setGeneratedSKU(skuObject);

    // Reset form
    setItemName('');
    setSkuCode('');
    setCategory('');
    setSubcategory('');
    setBrandName('');
    setSkuMode('auto');
  };

  return (
    <div className="sku-container">
      <h2 className="sku-title">Create SKU</h2>
      <form onSubmit={handleSubmit} className="sku-form">
        <div className="form-group">
          <label>Item Name</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>SKU Mode</label>
          <select value={skuMode} onChange={(e) => setSkuMode(e.target.value)}>
            <option value="auto">Auto Generate</option>
            <option value="manual">Manual Entry</option>
          </select>
        </div>

        {skuMode === 'manual' && (
          <div className="form-group">
            <label>SKU Code</label>
            <input
              type="text"
              value={skuCode}
              onChange={(e) => setSkuCode(e.target.value)}
              required
            />
          </div>
        )}

        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Subcategory</label>
          <input
            type="text"
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Brand Name</label>
          <input
            type="text"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="button-submit">Create SKU</button>
      </form>

      {generatedSKU && (
        <div className="success-message">
          <h3>SKU Created Successfully!</h3>
          <p><strong>Item:</strong> {generatedSKU.itemName}</p>
          <p><strong>SKU Code:</strong> {generatedSKU.skuCode}</p>
          <p><strong>Category:</strong> {generatedSKU.category}</p>
          <p><strong>Subcategory:</strong> {generatedSKU.subcategory}</p>
          <p><strong>Brand:</strong> {generatedSKU.brandName}</p>
        </div>
      )}
    </div>
  );
}

export default CreateSKU;
