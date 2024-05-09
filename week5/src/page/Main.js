import styled from "styled-components";
import React from "react";
import MovieList from "../components/MovieList";

const Main = () => {
  return (
    <>
      <Section>
        <BoxOffice>
          <RankText>박스오피스 순위</RankText>
          <MovieList />
        </BoxOffice>
      </Section>
    </>
  );
};

const Section = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
`;

const BoxOffice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

const RankText = styled.div`
  font-size: 20px;
  font-weight: bold;
  align-self: flex-start;
  margin-left: 80px;
`;

export default Main;
