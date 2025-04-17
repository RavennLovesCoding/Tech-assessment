import React, { useState } from 'react';
import '../src/App.css';
import books from "../src/books.json";
import Heart from 'react-heart';

function App () {
  const [readMore, setReadMore] = useState({});
  const [fav, setFav] = useState({});
  
  const toggleReadMore  = (index) => {
    setReadMore((prev) => ({
      ...prev,
      [index]: !prev[index]
    }))
  };

  const toggleFav = (index) => {
    setFav((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };



  return (
    <div>
      <h1>Books</h1>
      <div>
      <ul className="bookCard">
        {books.map((book, index) => (
          <li key={index} style={{ marginBottom: '20px' }}>
            <p className="author">{book.author}</p>
            <h2>{book.title}</h2>
            <p className="pages">{book.pages} pages</p>
            <img 
              src={book.imageLink} 
              alt={`Cover of ${book.title}`} 
              style={{ width: '150px', height: 'auto', display: 'block', marginBottom: '10px' }}
            />
            <p className="readMore">Read More <button className="add" onClick={() => toggleReadMore(index)}>+</button>  <Heart
                  isActive={fav[index] || false} 
                  onClick={() => toggleFav(index)}
                  className="heartIcon"
                />

            </p>

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