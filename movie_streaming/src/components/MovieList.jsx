const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movies, index) => (
        <div className="image-container d-flex justify-content-start m3">
          <img src={movies.Poster} alt="movie" />
        </div>
      ))}
    </>
  );
};

export default MovieList;
