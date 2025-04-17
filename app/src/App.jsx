import React from 'react';
import '../src/App.css';
import books from "../src/books.json";

function App () {
  return (
    <div>
      <h1>Books</h1>
      
      <ul>
        <div className="bookCard">
        {books.map((book, index) => (
          <li key={index} style={{ marginBottom: '20px' }}>
            <p>Author: {book.author}</p>
            <h2>{book.title}</h2>
            <p>Pages:{book.pages}</p>
            <img 
              src={book.imageLink} 
              alt={`Cover of ${book.title}`} 
              style={{ width: '150px', height: 'auto', display: 'block', marginBottom: '10px' }}
            />
            <p>Read More <button>+</button></p>
          </li>
        ))}
        </div>
      </ul>
    
    </div>
  );
};

export default App;