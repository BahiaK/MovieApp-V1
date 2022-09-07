import React from 'react'
import './MovieCard.css'
import StarRatings from 'react-star-ratings'


const MovieCard = ({el}) => {
  return (
    <div className="hero-container">
      <div className="main-container">
        <div className="poster-container">
          <img src={el.ImageURL} className="poster" />
        </div>
        <div className="ticket-container">
          <div className="ticket__content">
            <h4 className="ticket__movie-title">{el.Title}</h4>
            <p className="ticket__movie-slogan">{el.Genre.Name}</p>
            <p className="ticket__current-price">
              <StarRatings
          rating={el.Rating}
          starDimension ="15px"
          starRatedColor="yellow"
          numberOfStars={5}
          name='rating'
        />
        </p>
            <p className="ticket__old-price">$44.99</p>
            <button className="ticket__buy-btn">Delails</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard