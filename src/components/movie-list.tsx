"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { IMovieModel } from "@/types/Movie";
import { MovieCard } from "./movie-card";
import { SafeArea } from "./safe-area";

interface MovieListProps {}

export const MovieList = ({}: MovieListProps) => {
  const [movies, setMovies] = useState<IMovieModel[]>([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
        language: "pt-BR",
      },
    }).then((res) => {
      setMovies(res.data.results);
      console.log(res.data.results);
    });
  };

  return (
    <SafeArea className="py-20">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </ul>
    </SafeArea>
  );
};
