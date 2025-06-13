import { BASE_URL, API_KEY } from "../api/config";

export type Movie = {
  title: string;
};

export type MovieResponse = {
  results: Movie[];
};

// 인기 영화
export async function fetchPopularMovies() {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("인기 영화 불러오기 실패");
  return res.json();
}
