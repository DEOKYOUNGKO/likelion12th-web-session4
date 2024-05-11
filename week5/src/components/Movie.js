import styled from "styled-components";

const Movie = ({ data }) => {
  return (
    <>
      <MovieBox>
        <MovieImgBox>
          <MovieImage src={data?.img} />
          <MovieRank>{data.rank}</MovieRank>
        </MovieImgBox>
        <MovieTextBox>
          <MovieTitle>{data.title}</MovieTitle>
          <MovieYear>
            {data.year} . {data.country}
          </MovieYear>
          <MoviePercent>
            예매률 {data.percent} . 누적관객 {data.audience}만명
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

const MovieRank = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  left: 10px;
  top: 10px;
  background-color: black;
  opacity: 0.7;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
`;

const MovieTextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieTitle = styled.div`
  font-size: 20px;
`;

const MovieYear = styled.div``;

const MoviePercent = styled.div``;
