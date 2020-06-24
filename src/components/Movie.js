import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import './Movie.css';

// selectMovieCallback={props.selectMovieCallback}
const Movie = (props) => {

  const[moviePoster,setMoviePoster] = useState("active");
  const[movieDetails,setMovieDetails] = useState("inactive");

  const onSelectMovie = (event) => {
    // console.log("event: ", event.target.value);
    return props.movieCallback({id: props.id, title: props.title, overview: props.overview, imageURL: props.imageUrl, releaseDate: props.releaseDate});
  };

  const toggleView = () => {
    (moviePoster === "active") ? setMoviePoster("inactive") : setMoviePoster("active");
    (movieDetails === "active") ? setMovieDetails("inactive") : setMovieDetails("active");
  }


  return (
    <div className="movie-container">
      <img src={props.imageUrl} alt={props.title} className={"movie-poster " + moviePoster} onClick={toggleView}/>
      <div className={"movie-info " + movieDetails} onClick={toggleView}>
        <h3>{props.title}</h3>
        <p className="release-date">Released Date: {props.releaseDate}</p>
        <p>{props.overview}</p>
        <button className="button-bg" onClick={onSelectMovie}>{props.buttonText}</button>
      </div>
    </div>
  )
}
  
//   return (
//     <div className="movie-container">
//       <img src={props.imageUrl} alt={props.title} className="movie-poster"/>
//       <div className="movie-info">
//         <h3>{props.title}</h3>
//         <p className="release-date">Released Date: {props.releaseDate}</p>
//         <p>{props.overview}</p>
//         <button className="button-bg" onClick={onSelectMovie}>{props.buttonText}</button>
//       </div>
//     </div>
//   )
// }


// // TODO
// Movie.propTypes = {
//   id: PropTypes.number.isRequired,
//   imageUrl: PropTypes.string,
//   overview: PropTypes.string,
//   releaseDate: PropTypes.string,  
//   title: PropTypes.string.isRequired
// };

export default Movie;
