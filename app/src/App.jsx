import React, { useState } from 'react';
import '../src/App.css';
import books from "../src/books.json";
import Heart from 'react-heart';

function App() {
  const [readMore, setReadMore] = useState({});
  const [fav, setFav] = useState({});
  const [favorites, setFavorites] = useState([]);

  const toggleReadMore = (index) => {
    setReadMore((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleFav = (index, book) => {
    setFav((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));

    if (!fav[index]) {
      setFavorites((prev) => [...prev, book]);
    } else {
      setFavorites((prev) => prev.filter((favBook) => favBook !== book));
    }
  };

  return (
    <div className="layout">
      <div className="books">
        <h1>Books</h1>
        <ul className="bookCard">
          {books.map((book, index) => (
            <li key={index}>
              <p className="author">{book.author}</p>
              <h2>{book.title}</h2>
              <p className="pages">{book.pages} pages</p>
              <img 
                src={book.imageLink} 
                alt={`Cover of ${book.title}`} 
              />
              <p className="readMore">
                Read More 
                <button className="add" onClick={() => toggleReadMore(index)}>+</button>
                <Heart
                  isActive={fav[index] || false}
                  onClick={() => toggleFav(index, book)}
                  className="heartIcon"
                />
              </p>
              {readMore[index] && (
                <div>
                  <p>Country: {book.country}</p>
                  <p>Language: {book.language}</p>
                  <p>
                    More Info: 
                    <a href={book.link} target="_blank" rel="noopener noreferrer">
                      Wikipedia
                    </a>
                  </p>
                  <p>Year Published: {book.year}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="favorites">
        <h2>Favorites</h2>
        <ul className="bookCard">
          {favorites.map((book, index) => {
            const bookIndex = books.findIndex((b) => b === book);
            return (
              <li key={index}>
                <p className="author">{book.author}</p>
                <h2>{book.title}</h2>
                <p className="pages">{book.pages} pages</p>
                <img
                  src={book.imageLink}
                  alt={`Cover of ${book.title}`}
                /> 
                <div className="favRow">
                <p className="readMore2">
                Read More 
                <button className="add" onClick={() => toggleReadMore(index)}>+</button>
              </p>
              {readMore[index] && (
                <div className="readMoreInfo">
                  <p>Country: {book.country}</p>
                  <p>Language: {book.language}</p>
                  <p>
                    More Info: 
                    <a href={book.link} target="_blank" rel="noopener noreferrer">
                      Wikipedia
                    </a>
                  </p>
                  <p>Year Published: {book.year}</p>
                </div>
              )}
                <button
                  className="remove-button"
                  onClick={() => {
                    setFavorites((prev) => prev.filter((favBook) => favBook !== book));
                    setFav((prev) => ({
                      ...prev,
                      [bookIndex]: false,
                    }));
                  }}
                >
                  -
                </button> </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;