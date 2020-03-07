import React from "react";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";
import "./css/Movie.css";

const Movie = ({ title, poster, time , entitle, vote_average, synopsis }) => {
  return (
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie__Column">
        <h1>{title}</h1>
        <div className="movie__Time">
          {time}
        </div>
        <div className="Movie__Entitle">
        {entitle}
        </div>
        <div className="Movie__Entitle">
        {vote_average}
        </div>
        <div className="Movie__Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine="8"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </div>
      </div>
    </div>
  );
}

const MoviePoster = ({ poster, alt }) => {
  return <img src={poster} alt={alt} title={alt} className="Movie__Poster" />;
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  entitle: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired
};

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};


export default Movie;