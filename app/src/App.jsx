import React from 'react';
import books from "../src/books.json";

function App () {
  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index} style={{ marginBottom: '20px' }}>
            <p><strong>Author:</strong> {book.author}</p>
            <h2>{book.title}</h2>
            <img 
              src={book.imageLink} 
              alt={`Cover of ${book.title}`} 
              style={{ width: '150px', height: 'auto', display: 'block', marginBottom: '10px' }}
            />
            <p><strong>Pages:</strong> {book.pages}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;