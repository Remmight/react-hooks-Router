import React from "react";
//import { Card } from "reactstrap";
//import { propTypes } from "react-bootstrap/esm/Image";
import Rating from "./Rating";
//import filter from "./filter";
import MovieList from "./MovieList";
import Movies from "./Movies";

/*const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index, rating, year) => (
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={movie.PosterURL} />
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>
              <p>{movie.Year}</p>
            </Card.Text>
            
            <div>{movie.rating}</div>
            <Rating movieRating={movie.Rating} />
          </Card.Body>

          </Card>
      ))}
    </>
  );
};
export default MovieList;*/

function MovieCard() {
  return (
    <div>
      <Rating />
      <filter />
      <div>
        <MovieList movies={Movies} moviesArray={Movies} />
      </div>
    </div>
  );
}

export default MovieCard;
