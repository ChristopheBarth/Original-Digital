import { useLoaderData } from "react-router-dom";
import MovieCards from "../components/MovieCards";
import "../styles/catalogue.css";

export default function Catalogue() {
  const { movies } = useLoaderData() as {
    movies: MovieType[];
  };

  const freeMovies = movies.filter((movie) => !movie.premium);
  const premiumMovies = movies.filter((movie) => movie.premium);
  const sfMovies = movies.filter((movie) =>
    movie.genres.includes("Science-fiction"),
  );
  return (
    <>
      <div className="first-container">
        <input
          type="search"
          id="site-search"
          name="q"
          placeholder="Rechercher"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
          aria-hidden="true"
        >
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
        </svg>
        <img
          src="/Background_connection.jpg"
          className="img-container"
          alt=""
        />
        <button type="button" className="decouvrir-nos-offres">
          Décrouvrir nos offres
        </button>
      </div>
      <div className="show-movies">
        <h2>Tendances Actuelles</h2>
        <section className="movie-container">
          {sfMovies.map((movie) => (
            <MovieCards key={movie.id} movie={movie} />
          ))}
        </section>
        <h2>Offres Premium</h2>
        <section className="movie-container">
          {premiumMovies.map((movie) => (
            <MovieCards key={movie.id} movie={movie} />
          ))}
        </section>
        <h2>Ma Liste</h2>
        <section className="movie-container">
          {movies.map((movie) => (
            <MovieCards key={movie.id} movie={movie} />
          ))}
        </section>
        <h2>Films gratuit</h2>
        <section className="movie-container">
          {freeMovies.map((movie) => (
            <MovieCards key={movie.id} movie={movie} />
          ))}
        </section>
      </div>
      <section id="acces" className="connection-bottom">
        <h2>Nos différentes souscriptions</h2>
        <div className="bottom-container">
          <div className="bottom-left">
            <h3>Accès Gratuit</h3>
            <p>Visionnez 4 films par mois</p>
            <p className="bottom-free">Accédez à notre catalogue complet</p>
            <p className="bottom-free">Regardez en haute qualité</p>
            <p className="bottom-free">Gérez vos listes de films à voir</p>
          </div>
          <div className="separation" />
          <div className="bottom-right">
            <h3>Accès Premium</h3>
            <p>Films illimités en haute qualité</p>
            <p>Accédez à notre catalogue complet</p>
            <p>Regardez en haute qualité</p>
            <p>Gérez vos listes de films à voir</p>
          </div>
        </div>
        <button type="button" className="button-bottom">
          Devenir Premium
        </button>
      </section>
    </>
  );
}
