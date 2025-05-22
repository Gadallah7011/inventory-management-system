// src/pages/DeactivateSKU.js
import React, { useState } from 'react';
import './DeactivateSKU.css';

function DeactivateSKU() {
  const [skuId, setSkuId] = useState('');
  const [deactivatedSKUs, setDeactivatedSKUs] = useState([]);
  const [confirmation, setConfirmation] = useState('');

  const handleDeactivate = (e) => {
    e.preventDefault();

    if (skuId.trim() === '') return;

    const newDeactivation = {
      id: skuId,
      timestamp: new Date().toLocaleString(),
    };

    setDeactivatedSKUs([...deactivatedSKUs, newDeactivation]);
    setConfirmation(`SKU ${skuId} has been deactivated.`);
    setSkuId('');
  };

  return (
    <div className="deactivate-sku-container">
      <h2>Deactivate SKU</h2>
      <form onSubmit={handleDeactivate} className="deactivate-form">
        <input
          type="text"
          placeholder="Enter SKU ID"
          value={skuId}
          onChange={(e) => setSkuId(e.target.value)}
          required
        />
        <button type="submit">Deactivate</button>
      </form>

      {confirmation && <p className="confirmation">{confirmation}</p>}

      {deactivatedSKUs.length > 0 && (
        <div className="deactivation-list">
          <h3>Deactivated SKUs</h3>
          <ul>
            {deactivatedSKUs.map((sku, index) => (
              <li key={index}>
                {sku.id} (Deactivated at: {sku.timestamp})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DeactivateSKU;
