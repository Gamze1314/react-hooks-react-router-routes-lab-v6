import { useEffect, useState } from "react";
import NavBar from '../components/NavBar'

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((res) => res.json())
      .then((data) => setDirectors(data));
  }, []);

  console.log(directors);

  return (
    <div>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map((director) => (
        <article key={director.id}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Directors;

// this component render on /directors route
// displays "Director's Page" =>h1
// render new Article element for each director
// article contains the names in h2
// and ul for the directors movies
