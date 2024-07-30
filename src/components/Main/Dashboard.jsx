import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [folders, setFolders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');

  const handleCreateForm = () => {
    navigate('/create-form');
  };

  const handleCreateFolder = () => {
    setIsModalOpen(true);
  };

  const handleCreateFolderSubmit = () => {
    if (newFolderName.trim()) {
      setFolders([...folders, newFolderName]);
      setNewFolderName('');
      setIsModalOpen(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token from localStorage
    navigate('/'); // Redirect to the home page or login page
  };

  return (
    <div className="dashboard">
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>

      <div className="create-folder-card" onClick={handleCreateFolder}>
        <div className="plus-icon">+</div>
        <p>Create a Folder</p>
      </div>

      {folders.map((folder, index) => (
        <div key={index} className="folder">
          <h3>{folder}</h3>
          <div className="create-form-card" onClick={() => navigate(`/create-form?folder=${folder}`)}>
            <div className="plus-icon">+</div>
            <p>Create Form in {folder}</p>
          </div>
        </div>
      ))}

      <div className="create-form-card" onClick={handleCreateForm}>
        <div className="plus-icon">+</div>
        <p>Create a typebot</p>
      </div>

      {isModalOpen && (
        <div className="modal">
          <h2>Create New Folder</h2>
          <input
            type="text"
            placeholder="Enter folder name"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
          />
          <div className="modal-buttons">
            <button className="done-button" onClick={handleCreateFolderSubmit}>Done</button>
            <button className="cancel-button" onClick={() => setIsModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
