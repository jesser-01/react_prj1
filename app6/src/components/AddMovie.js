import React, { useState } from 'react';

const AddMovie = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !posterURL) {
      alert('Title and Poster URL are required!');
      return;
    }
    addMovie({ title, description, posterURL, rating: Number(rating) });
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ marginRight: '10px' }}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ marginRight: '10px', width: '250px' }}
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        required
        style={{ marginRight: '10px', width: '250px' }}
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        min="0"
        max="10"
        onChange={(e) => setRating(e.target.value)}
        style={{ marginRight: '10px', width: '80px' }}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
