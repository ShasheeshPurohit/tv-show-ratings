import React, { useState } from "react";
import "./styles.css";

var tvShowsDB = {
  comedy: [
    {
      name: "How I Met Your Mother",
      rating: "7/10",
      img:
        "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/TVSeries/HowIMetYourMother_6647600-HOWIMET._V392937824_RI_.jpg"
    },
    {
      name: "Fresh Prince of Bel Air",
      rating: "8/10",
      img:
        "https://www.newstatesman.com/sites/default/files/styles/cropped_article_image/public/blogs_2017/08/rehost_2f2016_2f9_2f13_2f1b5cb41f-6c9f-4862-ae3a-107fd32008ab_1_.jpg?itok=3V2At_67"
    }
  ],

  drama: [
    {
      name: "Suits",
      rating: "8/10",
      img:
        "https://deadline.com/wp-content/uploads/2018/01/download-suits-season-7.jpg"
    },
    {
      name: "Mr. Robot",
      rating: "7/10",
      img:
        "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/679a936609f37411bef9407b14220267d7a85b79b69ca5600fbe82b7c1ae19fa._RI_V_TTW_.jpg"
    }
  ],

  action: [
    {
      name: "Flash",
      rating: "7/10",
      img:
        "https://www.denofgeek.com/wp-content/uploads/2018/04/the-flash-season-5-release-date-news-villain-story.jpg?fit=1200%2C900"
    },
    {
      name: "The Boys",
      rating: "6/10",
      img:
        "https://cnet4.cbsistatic.com/img/a86jUXdwaxd7aoCHHE9VHGdRr_E=/center/top/2019/05/29/b4cf5339-f9cc-4e85-9ab0-ef20b3441c90/theboys1.jpg"
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
      <hr />
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
                <div>
                  <img src={show.img} className="show-thumbnail"></img>
                </div>
                <div>
                  <div className="showName">{show.name}</div>
                  <div className="rating">rating: {show.rating}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
