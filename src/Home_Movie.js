import React from "react";
import PropTypes from "prop-types";
import './Home.css'

const Home_Movie = ({ title, poster}) => {
  return (
      <div>
        <span className="Movie__Column">
        <MoviePoster poster={poster} alt={title} />
        </span>
      </div>
  );
}

const MoviePoster = ({ poster, alt }) => {
  return <img src={poster} alt={alt} title={alt} className="Movie__Poster" />;
}

Home_Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};


export default Home_Movie;