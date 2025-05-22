import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './CreateBranch.css';  // ربط ملف الستايل

function CreateBranch() {
  const [branchName, setBranchName] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [branchId, setBranchId] = useState(null);
  const [branches, setBranches] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBranch = {
      id: uuidv4(),
      name: branchName,
      location,
      contact,
    };

    setBranches([...branches, newBranch]);
    setBranchId(newBranch.id);

    setBranchName('');
    setLocation('');
    setContact('');
  };

  return (
    <div className="container">
      <h2 className="title">Create New Inventory Branch</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
        <div className="form-group">
          <label>Branch Name</label>
          <input
            type="text"
            value={branchName}
            onChange={(e) => setBranchName(e.target.value)}
            required
            placeholder="Enter branch name"
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            placeholder="Enter location"
          />
        </div>
        <div className="form-group">
          <label>Contact Details</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
            placeholder="Enter contact info"
          />
        </div>
        <button type="submit" className="button-submit">
          Add Branch
        </button>
      </form>

      {branchId && (
        <div className="success-message">
          Branch created successfully! <br />
          <span>Branch ID: <strong>{branchId}</strong></span>
        </div>
      )}

      {branches.length > 0 && (
        <div className="branches-list">
          <h3>Branches List</h3>
          <ul>
            {branches.map((branch) => (
              <li key={branch.id}>
                <div>
                  <strong>{branch.name}</strong> <br />
                  <small className="branch-info">{branch.location} | {branch.contact}</small>
                </div>
                <span className="branch-id">
                  ID: {branch.id.slice(0, 8)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CreateBranch;
