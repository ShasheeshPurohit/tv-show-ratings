import React, { useState } from "react";
import "./styles.css";

var tvShowsDB = {
  comedy: [
    {
      name: "How I Met Your Mother",
      rating: "7/10"
    },
    {
      name: "Fresh Prince of Bel Air",
      rating: "8/10"
    }
  ],

  drama: [
    {
      name: "Suits",
      rating: "8/10"
    },
    {
      name: "Mr. Robot",
      rating: "7/10"
    }
  ],

  action: [
    {
      name: "Flash",
      rating: "7/10"
    },
    {
      name: "The Boys",
      rating: "6/10"
    }
  ]
};

var showList = Object.keys(tvShowsDB);

export default function App() {
  const [selectedGenre, setGenre] = useState("comedy");

  function genreHandler(genreName) {
    setGenre(genreName);
  }

  return (
    <div className="App">
      <h1 className="hero-heading">🎭 TV Shows</h1>
      <h2>Click on the genres to get ratings of various tv shows:</h2>
      <div>
        {showList.map((genre) => {
          return (
            <button className="genre-btn" onClick={() => genreHandler(genre)}>
              {genre}
            </button>
          );
        })}
      </div>

      <div>
        <ul className="genre-list">
          {tvShowsDB[selectedGenre].map((show) => {
            return (
              <li className="genre-list-item">
                <div className="showName">{show.name}</div>
                <div className="rating">rating: {show.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
