import styled from "styled-components";
import Movie from "./Movie";
import Data from "../assets/Data";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function MovieList() {
  const navigate = useNavigate();

  const handleMovieClick = (movieData) => {
    navigate(`/detail/${movieData.rank}`, { state: { movieData } });
  };

  return (
    <MovieListContainer>
      {Data.map((Data) => (
        <MovieContainer key={Data.rank} onClick={() => handleMovieClick(Data)}>
          {/* <NavbarLink to={`/detail/${movieData.title}`} key={movieData.rank}> */}
          <Movie data={Data} />
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
