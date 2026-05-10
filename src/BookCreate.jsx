import { useState } from 'react';

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
      onCreate(title);
      setTitle('');
    
  };

  return (
    <div>
      <h1>Book Create</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={handleChange}
            placeholder="Enter book title"
          />
        </label>
        <button>Add Book</button>
      </form>
    </div>
  )
}

export default BookCreate;  