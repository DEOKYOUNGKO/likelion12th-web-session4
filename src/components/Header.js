import React from "react";
import styled from "styled-components";
import logo from "../assets/image/icon_logo.png";
import { Link } from "react-router-dom";

const Header = ({ LoginBtn }) => {
  return (
    <StickyHeader>
      <HeaderContainer>
        <LogoGenreBox>
          <LogoLink to="/">
            <LogoImage src={logo} alt="로고 이미지" />
          </LogoLink>
          <GenreBox>
            <GenreText>영화</GenreText>
            <GenreText>TV</GenreText>
            <GenreText>책</GenreText>
            <GenreText>웹툰</GenreText>
          </GenreBox>
        </LogoGenreBox>
        <SearchButtonBox>
          <SearchBox
            type="text"
            placeholder="🔍  콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."
          />
          <div>
            <LoginButton onClick={LoginBtn}>로그인</LoginButton>
            <SignUpButton onClick={() => alert("회원가입")}>
              회원가입
            </SignUpButton>
          </div>
        </SearchButtonBox>
      </HeaderContainer>
    </StickyHeader>
  );
};

export default Header;

const StickyHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: transparent;
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  /* background-color: #fff; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LogoGenreBox = styled.div`
  display: flex;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const GenreBox = styled.div`
  display: flex;
  width: 180px;
  height: 40px;
  align-items: center;
  margin-left: 30px;
  justify-content: space-around;
`;

const GenreText = styled.div`
  font-weight: bold;
  font-size: 17px;
  color: #7e7e7e;
  :hover {
    cursor: pointer;
  }
`;
const SearchBox = styled.input`
  width: 300px;
  height: 8px;
  padding: 20px;
  margin: 0 10px;
  border: none;
  background-color: #f5f5f7;
`;

const LoginButton = styled.button`
  padding: 10px 20px;
  background-color: #ffffff;
  color: #74747b;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SignUpButton = styled(LoginButton)`
  font-weight: bold;
  border: 1px solid black;
`;

const LogoImage = styled.img`
  width: 200px;
`;

const SearchButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;
