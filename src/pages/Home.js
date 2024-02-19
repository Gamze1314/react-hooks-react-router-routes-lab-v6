import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((res) => res.json())
      .then((movieData) => setMovies(movieData));
  }, []);


  const cards = movies.map((movie) => (
    <MovieCard key={movie.id} id={movie.id} title={movie.title} />
  ));

  return (
    <>
      <NavBar />
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
        {cards}
      </main>
    </>
  );
}

export default Home;
