import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import CreateBranch from './pages/CreateBranch';
import CreateSKU from './pages/CreateSKU';
import SKUSearch from './pages/SKUSearch';
import DeactivateSKU from './pages/DeactivateSKU';
import BarcodeQRIntegration from './pages/BarcodeQRIntegration';
import logo from './logo.svg';
import './App.css';

function Home() {
  return (
    <main className="home-container">
      <header className="home-header">
        <img src={logo} alt="Inventory Management Logo" className="home-logo" />
        <h1>Inventory Management System</h1>
        <p className="subtitle">Select a module below to get started.</p>
      </header>

      <section className="features-list">
        <Feature title="Inventory Branch Setup SDK" link="/create-branch" />
        <Feature title="SKU Creation Library" link="/create-sku" />
        <Feature title="SKU Search Library" link="/search-sku" />
        <Feature title="SKU Deactivation Library" link="/deactivate-sku" />
        <Feature title="Barcode/QR Code Integration SDK" link="/barcode-qr" />
      </section>
    </main>
  );
}

function Feature({ title, link }) {
  return (
    <article className="feature-card-simple">
      <NavLink to={link} className="feature-link-simple">
        {title}
      </NavLink>
    </article>
  );
}

function App() {
  return (
    <Router>
      <nav className="main-nav">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} end>
          Home
        </NavLink>
        <NavLink to="/create-branch" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Create Branch
        </NavLink>
        <NavLink to="/create-sku" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Create SKU
        </NavLink>
        <NavLink to="/search-sku" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Search SKU
        </NavLink>
        <NavLink to="/deactivate-sku" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Deactivate SKU
        </NavLink>
        <NavLink to="/barcode-qr" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Barcode/QR Integration
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-branch" element={<CreateBranch />} />
        <Route path="/create-sku" element={<CreateSKU />} />
        <Route path="/search-sku" element={<SKUSearch />} />
        <Route path="/deactivate-sku" element={<DeactivateSKU />} />
        <Route path="/barcode-qr" element={<BarcodeQRIntegration />} />
      </Routes>
    </Router>
  );
}

export default App;
