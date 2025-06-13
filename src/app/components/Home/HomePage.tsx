"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPopularMovies } from "@/api/movie";

export default function HomePage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: fetchPopularMovies,
  });

  if (isLoading) return <p>로딩중..</p>;
  if (error) return <p>에러발생!</p>;

  return (
    <div>
      <h1>무비버스</h1>
      <p>{data?.results[0]?.title}</p>
    </div>
  );
}
