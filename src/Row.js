import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Row.css";

const base_image_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //   console.log(request.data.results); // here are get the list of movies
      setMovies(request.data.results); // here we are setting the results (movies) into the setMovies array, basically storing the movies
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.table(movies);
  return (
    <div className="row">
      <h2> {title} </h2>
      <div className="row_posters">
        {/* serveral row_poster(s) */}
        {movies.map((movie) => (
          <img
            className="row_poster"
            src={`${base_image_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;