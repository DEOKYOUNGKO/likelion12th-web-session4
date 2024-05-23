import styled from "styled-components";
import React from "react";
import MovieList from "../components/MovieList";
import { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {
  const [movielist, setMovieList] = useState();

  const getMovieList = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`, // Assuming it's a Bearer token
        },
      })
      .then((res) => {
        // Handle the response console.log(response.data);
        console.log(res.data.results);
        setMovieList(res.data.results);
        // console.log(res.data.results);
      })
      .catch((error) => {
        // Handle errors console.error('Error:', error.message);
      });
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <>
      <Section>
        <BoxOffice>
          <RankText>박스오피스 순위</RankText>
          <MovieList movielist={movielist} />
        </BoxOffice>
      </Section>
    </>
  );
};

const Section = styled.div`
  width: 100%;
  height: 100vh;
`;

const BoxOffice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

const RankText = styled.p`
  font-size: 25px;
  font-weight: bold;
  align-self: flex-start;
  margin-left: 100px;
`;

export default Main;
