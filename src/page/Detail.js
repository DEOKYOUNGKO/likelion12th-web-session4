import React from "react";
import styled from "styled-components";
// import { useState } from "react";
import { useLocation } from "react-router-dom";
// import 보고싶어요 from "../assets/image/보고싶어요.png";
// import 코멘트 from "../assets/image/코멘트.png";
// import 보는중 from "../assets/image/보는 중.png";
// import 더보기 from "../assets/image/더보기.png";

const Detail = () => {
  const location = useLocation();

  return (
    <>
      <Container>
        <BackImage src={location.state.movieData.img} alt="배경화면" />
        <MovieInfo>
          <DetailTitle1>{location.state.movieData.title}</DetailTitle1>
          <DetailTitle2>{location.state.movieData.title}</DetailTitle2>
          <DetailYearCountry>
            {location.state.movieData.year}. {location.state.movieData.country}
          </DetailYearCountry>
          <DetailRankPercentAudience>
            예매 순위{location.state.movieData.rank}(
            {location.state.movieData.percent})위. 누적 관객{" "}
            {location.state.movieData.audience}만명
          </DetailRankPercentAudience>
        </MovieInfo>
        <ReviewBox>
          <MoviePoster src={location.state.movieData.img} alt="포스터" />
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
            <MovieText>{location.state.movieData.text}</MovieText>
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
            <GalleryPhoto
              src={location.state.movieData.gallery1}
              alt="갤러리사진1"
            />
            <GalleryPhoto
              src={location.state.movieData.gallery2}
              alt="갤러리사진2"
            />
            <GalleryPhoto
              src={location.state.movieData.gallery3}
              alt="갤러리사진3"
            />
            <GalleryPhoto
              src={location.state.movieData.gallery4}
              alt="갤러리사진4"
            />
            <GalleryPhoto
              src={location.state.movieData.gallery5}
              alt="갤러리사진5"
            />
            <GalleryPhoto
              src={location.state.movieData.gallery6}
              alt="갤러리사진6"
            />
            <GalleryPhoto
              src={location.state.movieData.gallery7}
              alt="갤러리사진7"
            />
            <GalleryPhoto
              src={location.state.movieData.gallery8}
              alt="갤러리사진8"
            />
            <GalleryPhoto
              src={location.state.movieData.gallery9}
              alt="갤러리사진9"
            />
            <GalleryPhoto
              src={location.state.movieData.gallery10}
              alt="갤러리사진10"
            />
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
            <VideoRink>링크 연결</VideoRink>
            <VideoRink>링크 연결</VideoRink>
            <VideoRink>링크 연결</VideoRink>
          </VideoBox>
        </VideoContainer>
      </Container>
    </>
  );
};

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

export default Detail;
