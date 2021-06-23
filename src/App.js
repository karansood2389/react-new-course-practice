import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
  const [filmList, setFilmList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const fetchFilmListHandler = useCallback(async () => {
    setIsLoading(true);
    setIsError(null);
    try {
      const response = await fetch("https://react-my-burger-4abf5.firebaseio.com/movies.json");
      if (!response.ok) {
        throw new Error("Some thing went wrong");
      }
      const data = await response.json();
      const filteredList = [];

      for (let key in data) {
        filteredList.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        })
      }    

      // const filteredList = data.results.map((filmItem) => ({
      //   id: filmItem.episode_id,
      //   title: filmItem.title,
      //   openingText: filmItem.opening_crawl,
      //   releaseDate: filmItem.release_date,
      // }));
      setFilmList(filteredList);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(error);
    }
  }, [])

  useEffect(() => {
    fetchFilmListHandler();
  }, [fetchFilmListHandler]);

  async function addMovieHandler(movie) {
    const response = await fetch("https://react-my-burger-4abf5.firebaseio.com/movies.json", {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  let content = <p>No films found.</p>;
  if (!isLoading && filmList.length > 0) {
    content = <MoviesList movies={filmList} />;
  }

  if (!isLoading && isError) {
    content = <p>{isError.message}</p>
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchFilmListHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;

// {!isLoading && filmList.length > 0 && <MoviesList movies={filmList} />}
//         {!isLoading && filmList.length === 0 && !isError && (
//           <p>No films found.</p>
//         )}
//         {!isLoading && isError && <p>{isError.message}</p>}
//         {isLoading && <p>Loading...</p>}
