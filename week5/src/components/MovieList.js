import styled from "styled-components";
import Movie from "./Movie";
import Data from "../assets/Data";

function MovieList() {
  return (
    <MovieListContainer>
      {Data.map((movie) => (
        <Movie
          key={movie.rank}
          rank={movie.rank}
          img={movie.img}
          title={movie.title}
          year={movie.year}
          country={movie.country}
          average={movie.average}
          percent={movie.percent}
          audience={movie.audience}
        />
      ))}
    </MovieListContainer>
  );
}

export default MovieList;

const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
