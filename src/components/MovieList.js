import styled from "styled-components";
import Movie from "./Movie";
import { useNavigate } from "react-router-dom";

function MovieList({ movielist }) {
  const navigate = useNavigate();

  const handleMovieClick = (item) => {
    navigate(`/detail/${item.id}`, { state: { item } });
  };

  return (
    <MovieListContainer>
      {movielist?.map((item) => (
        <MovieContainer key={item.id} onClick={() => handleMovieClick(item)}>
          <Movie item={item} />
        </MovieContainer>
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

const MovieContainer = styled.div`
  text-decoration: none;
  margin: 10px;
  cursor: pointer;
`;
