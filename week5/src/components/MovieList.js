import styled from "styled-components";
import Movie from "./Movie";
import Data from "../assets/Data";

function MovieList() {
  return (
    <MovieListContainer>
      {Data.map((movie, index) => (
        <Movie data={movie} />
      ))}
    </MovieListContainer>
  );
}

export default MovieList;

const MovieListContainer = styled.div`
  width: 90%;
  height: 600px;
  display: flex;
  gap: 30px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
