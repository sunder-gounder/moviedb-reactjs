import React from "react";
import { Link } from "react-router-dom";


const MovieDetails = (props) => {
  const handleClick = () => {
    props.setMovieId(props.id);
    

  };

  return (
    <div className="movie-card">
      <Link to={"/movie/" + props.id}>
        <img
          src={`https://image.tmdb.org/t/p/original/${props.poster}`}
          alt="movie"
          className="movie-img"
          onClick={handleClick}
        ></img>
      </Link>
      <p><span className="rating">{props.title}
      {/* <p>
         Rating: <span className="rating">{props.rating}</span>
          </p> */}
      </span>
        </p>
    </div>
  );
};

export default MovieDetails;
