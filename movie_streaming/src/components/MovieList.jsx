const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movies, index) => (
        <div className="image-container d-flex justify-content-start m3">
          <img src={movies.poster} alt="movie" />
        </div>
      ))}
    </>
  );
};

export default MovieList;
