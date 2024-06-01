import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { GalleyData } from "../assets/GalleryData";

// import 보고싶어요 from "../assets/image/보고싶어요.png";
// import 코멘트 from "../assets/image/코멘트.png";
// import 보는중 from "../assets/image/보는 중.png";
// import 더보기 from "../assets/image/더보기.png";

const Detail = () => {
  const [detailList, setDetailList] = useState();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?language=%EF%BD%8B%EF%BD%8F`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
      )
      .then((res) => {
        setDetailList(res.data);
        // console.log("data", res.data);
      })
      .catch((error) => {
        // Handle errors console.error('Error:', error.message);
      });
  }, [setDetailList, id]);

  return detailList ? (
    <>
      <Container>
        <BackImage
          src={`https://image.tmdb.org/t/p/w500${detailList.backdrop_path}`}
          alt="배경화면"
        />
        <MovieInfo>
          <DetailTitle1>{detailList.original_title}</DetailTitle1>
          <DetailTitle2>{detailList.title}</DetailTitle2>
          <DetailYearCountry>
            {detailList.release_date}.{detailList.genre}.
            {detailList.original_country}
          </DetailYearCountry>
          <DetailRankPercentAudience>
            예매 순위{detailList.rank}({detailList.vote_average}%)위. 누적 관객
            {detailList.audience}만명
          </DetailRankPercentAudience>
        </MovieInfo>
        <ReviewBox>
          <MoviePoster
            src={`https://image.tmdb.org/t/p/w500${detailList.poster_path}`}
            alt="포스터"
          />
          <MovieContents>
            <ButtonContainer>
              <MovieEvaluateText>평가하기</MovieEvaluateText>
              <StarBox></StarBox>
              <DetailButton>
                {/* <img src={보고싶어요} alt="보고싶어요" /> */}✚ 보고싶어요
              </DetailButton>
              <DetailButton>
                {/* <img src={코멘트} alt="코멘트" /> */}
                🖊️ 코멘트
              </DetailButton>
              <DetailButton>
                {/* <img src={보는중} alt="보는 중" /> */}
                👁️ 보는중
              </DetailButton>
              <DetailButton>
                {/* <img src={더보기} alt="더보기" /> */}
                ・・・ 더보기
              </DetailButton>
            </ButtonContainer>
            <MovieText>{detailList.overview}</MovieText>
          </MovieContents>
        </ReviewBox>
        {/* <PersonBox>
          <PersonText>출연/제작</PersonText>
          <PersonInfo>
            <PersonDetail>
              <PersonImg>인물사진</PersonImg>
              <PersonLocation>
                <PersonName>{location.state.movieData.name1}</PersonName>
                <PersonRole>{location.state.movieData.role1}</PersonRole>
              </PersonLocation>
              <PersonLocation>
                <PersonName>{location.state.movieData.name2}</PersonName>
                <PersonRole>{location.state.movieData.role2}</PersonRole>
              </PersonLocation>
              <PersonLocation>
                <PersonName>{location.state.movieData.name3}</PersonName>
                <PersonRole>{location.state.movieData.role3}</PersonRole>
              </PersonLocation>
            </PersonDetail>
          </PersonInfo>
        </PersonBox> */}
        <GalleryBox>
          <GalleryName>갤러리</GalleryName>
          <PhotoBox>
            {GalleyData.map((gallery) => (
              <GalleryPhoto
                key={gallery.id}
                src={gallery.gallery}
                alt={`갤러리${gallery.id}`}
              />
            ))}
          </PhotoBox>
        </GalleryBox>
        <VideoContainer>
          <VideoName>동영상</VideoName>
          <VideoBox>
            <VideoRink>링크 연결</VideoRink>
            <VideoRink>링크 연결</VideoRink>
            <VideoRink>링크 연결</VideoRink>
            <VideoRink>링크 연결</VideoRink>
            <VideoRink>링크 연결</VideoRink>
            <VideoRink>링크 연결</VideoRink>
            <VideoRink>링크 연결</VideoRink>
            <VideoRink>링크 연결</VideoRink>
            <VideoRink>링크 연결</VideoRink>
            <VideoRink>링크 연결</VideoRink>
            <VideoRink>링크 연결</VideoRink>
            <VideoRink>링크 연결</VideoRink>
            <VideoRink>링크 연결</VideoRink>
            <VideoRink>링크 연결</VideoRink>
            <VideoRink>링크 연결</VideoRink>
            <VideoRink>링크 연결</VideoRink>
            <VideoRink>링크 연결</VideoRink>
            <VideoRink>링크 연결</VideoRink>
            <VideoRink>링크 연결</VideoRink>
          </VideoBox>
        </VideoContainer>
      </Container>
    </>
  ) : (
    <Loading>로딩중</Loading>
  );
};

export default Detail;

const Loading = styled.div`
  font-size: 40px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  text-align: left;
`;

const BackImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 500px;
  z-index: -1;
`;

const MovieInfo = styled.div`
  position: absolute;
  top: 250px;
  left: 100px;
  margin-top: 20px;
  text-align: left;
  color: #fff;
`;

const DetailTitle1 = styled.h1`
  text-align: left;
  font-weight: 800;
`;

const DetailTitle2 = styled.p``;

const DetailYearCountry = styled.p`
  font-size: 16px;
`;

const DetailRankPercentAudience = styled.p`
  font-size: 16px;
`;

const MoviePoster = styled.img`
  width: 300px;
`;

const ReviewBox = styled.div`
  /* border: 2px solid; */
  margin: 400px 20px 0px 20px;
  display: flex;
  flex-direction: row;
  padding: 30px;
  color: #999;
  font-size: 20px;

  i {
    margin: 20px 10px 20px 0;
    opacity: 0.1;
    cursor: pointer;
    font-size: 50px;
  }

  .yellowStar {
    color: orange;
    opacity: 1;
  }
`;
const MovieContents = styled.div`
  display: flex;
  flex-direction: column;
`;

const StarBox = styled.div`
  /* svg {
    color: #aaa;
    font-size: 50px;
    margin-right: 1px;
  }
  &:hover {
    cursor: pointer;
    transition: 1s ease-in-out;
    transform: scale(1.1);
  } */
  text-align: center;
  border: none;
  background-color: white;
`;

const MovieEvaluateText = styled.div`
  font-size: 50px;
  width: 300px;
  height: 30px;
  text-align: center;
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const DetailButton = styled.div`
  width: 150px;
  height: 50px;
  border: none;
  font-size: 18px;
  margin-right: 20px;
  background-color: white;
  color: #8c8c8c;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
  }
`;

const MovieText = styled.p`
  margin: 100px;
`;

const GalleryBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 30px;
`;

const GalleryName = styled.p``;

const GalleryPhoto = styled.img`
  width: 300px;
`;

const PhotoBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  max-width: 1500px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

// const PersonBox = styled.p`
//   display: flex;
//   justify-content: flex-start;
//   flex-direction: column;
// `;

// const PersonText = styled.p``;

// const PersonInfo = styled.p`
//   display: flex;
//   justify-content: flex-start;
//   flex-direction: column;
// `;

// const PersonImg = styled.div``;

// const PersonDetail = styled.p`
//   display: flex;
//   justify-content: flex-start;
//   flex-direction: row;
//   gap: 10px;
// `;

// const PersonName = styled.p``;

// const PersonRole = styled.p``;

// const PersonLocation = styled.p`
//   gap: 10px;
// `;

const VideoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 30px;
  gap: 30px;
  max-width: 1500px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const VideoName = styled.p``;
const VideoBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  max-width: 1500px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const VideoRink = styled.div`
  width: 500px;
  font-size: 50px;
  margin: 10px 50px;
`;
