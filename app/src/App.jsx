import React, { useState } from 'react';
import '../src/App.css';
import books from "../src/books.json";

function App () {
  const [readMore, setReadMore] = useState({});
  
  const toggleReadMore  = (index) => {
    setReadMore((prev) => ({
      ...prev,
      [index]: !prev[index]
    }))
  };

  return (
    <div>
      <h1>Books</h1>
      <div>
      <ul className="bookCard">
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
            <p>Read More <button onClick={() => toggleReadMore(index)}>+</button></p>

            {readMore[index] && (
                <div>
                  <p>Country: {book.country}</p>
                  <p>Language: {book.language}</p>
                  <p>
                    More Info:{' '}
                    <a href={book.link} target="_blank" rel="noopener noreferrer">
                      Wikipedia
                    </a>
                  </p>
                  <p>Year Published:{book.year}</p>
                </div>
              )}
            </li>


          
        ))}
        
      </ul>
      </div>
    
    </div>
  );
};

export default App;