import React, { useState } from 'react';
import './CreateNew.scss'; // Import the styles
import { useNavigate } from 'react-router-dom';

const CreateNew = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate_to = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    onCreate(title, description);
    setTitle('');
    setDescription('');
    navigate_to('/');
  };

  return (
    <div className="create-new-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            required
          />
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default CreateNew;
