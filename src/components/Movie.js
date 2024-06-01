import styled from "styled-components";

const Movie = ({ item }) => {
  return (
    <>
      <MovieBox>
        <MovieImgBox>
          <MovieImage
            src={`https://image.tmdb.org/t/p/w500` + item.poster_path}
          />
          {/* <MovieRank>{id.title}</MovieRank> */}
        </MovieImgBox>
        <MovieTextBox>
          {/* <MovieTitle>{id.title}</MovieTitle> */}
          <MovieYear>
            {/* {id.release_date} . {id.original_country} */}
          </MovieYear>
          <MoviePercent>
            {/* 예매률 {id.vote_average}% . 누적관객 {id.audience}만명 */}
          </MoviePercent>
        </MovieTextBox>
      </MovieBox>
    </>
  );
};

export default Movie;

const MovieBox = styled.div`
  display: flex;
  width: 300px;
  height: 600px;
  flex-direction: column;
`;

const MovieImgBox = styled.div`
  width: 250px;
  height: 400px;
  position: relative;
`;

const MovieImage = styled.img`
  width: 250px;
  height: 400px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const MovieTextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieYear = styled.p``;

const MoviePercent = styled.p``;
