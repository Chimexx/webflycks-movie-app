import React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
	return (
		<Link to={`/movie/${movie.imdbID}`}>
			<div className="movie-card">
				<div className="movie-poster">
					<img className="movie-img" src={movie.Poster} alt="movie poster" />
				</div>
				<div className="movie-info">
					<h4>{movie.Title}</h4>
					<p>Year: {movie.Year}</p>
				</div>
			</div>
		</Link>
	);
};

export default MovieCard;
