import { Link } from "react-router-dom";

export default function MovieCards({ movie }: MoviesProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="card-movie-img">
        <Link to={`/movies/${movie.id}`} onClick={scrollToTop}>
          <img src={movie.poster} alt="" />
        </Link>
        <p className="movie-title">{movie.title}</p>
        <p className="movie-year">{movie.release_year}</p>
      </div>
    </>
  );
}
