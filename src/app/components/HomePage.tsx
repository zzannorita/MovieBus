"use client";
import React, { JSX, useEffect, useState } from "react";

const API_KEY = "93bb5dcf3fb40a6f809a5523ec4bb693"; // ← 여기에 네 DB API 키 넣어줘

type Movie = {
  title: string;
};

type MovieResponse = {
  results: Movie[];
};

export default function HomePage() {
  const [movieTitle, setMovieTitle] = useState<string>("");

  useEffect(() => {
    async function fetchPopularMovies() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );
        const data: MovieResponse = await res.json();

        if (data.results?.length > 0) {
          setMovieTitle(data.results[0].title);
        }
      } catch (error) {
        console.error("데이터 불러오기 실패패", error);
      }
    }

    fetchPopularMovies();
  }, []);

  return (
    <div>
      <h1>인기 영화 1위:</h1>
      <p>{movieTitle || "로딩 중 ..."}</p>
    </div>
  );
}
