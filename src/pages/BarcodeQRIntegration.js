import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { QrReader } from 'react-qr-reader';
import './BarcodeQRIntegration.css';

function BarcodeQRIntegration() {
  const [skuInput, setSkuInput] = useState('');
  const [scanResult, setScanResult] = useState('');

  const handleScan = (data) => {
    if (data) setScanResult(data);
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="barcode-container">
      <h2>Barcode/QR Code Integration</h2>

      <div className="section">
        <h3>Generate QR Code</h3>
        <input
          type="text"
          placeholder="Enter SKU or Product ID"
          value={skuInput}
          onChange={(e) => setSkuInput(e.target.value)}
        />
        <div className="qr-code">
          {/* استبدل QRCode بـ QRCodeSVG */}
          {skuInput && <QRCodeSVG value={skuInput} size={200} />}
        </div>
      </div>

      <div className="section">
        <h3>Scan QR Code</h3>
        <QrReader
          delay={300}
          onError={handleError}
          onResult={(result, error) => {
            if (!!result) {
              handleScan(result?.text);
            }
            if (!!error) {
              handleError(error);
            }
          }}
          style={{ width: '100%' }}
        />
        {scanResult && (
          <p className="scan-result">
            <strong>Scanned Data:</strong> {scanResult}
          </p>
        )}
      </div>
    </div>
  );
}

export default BarcodeQRIntegration;
