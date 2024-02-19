import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from '../components/NavBar'

function Movie() {
  const [movies, setMovies] = useState("");
   let { id } = useParams();

  useEffect(() => {
    // Make an API call to fetch the movie data
    fetch(`http://localhost:4000/movies/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  }, [id]);

  const spans = movies.genres
    ? movies.genres.map((g, index) => <span key={index}>{g}</span>)
    : null;

  return (
    <>
      <NavBar />
      <header>
        <h1>{movies.title}</h1>
      </header>
      <main>
        <p>{movies.time}</p>
        {spans}
      </main>
    </>
  );
}


export default Movie;
