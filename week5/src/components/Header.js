import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { useState } from "react";

const Header = ({ LoginBtn }) => {
  return (
    <HeaderContainer>
      <Nav>
        <a href="/movies">영화</a>
        <a href="/series">시리즈</a>
        <a href="/books">책</a>
        <a href="/webtoons">웹툰</a>
      </Nav>
      <SearchBox placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요." />
      <div>
        <Button onClick={LoginBtn}>로그인</Button>
        <Button onClick={() => alert("회원가입")}>회원가입</Button>
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const SearchBox = styled.input`
  padding: 10px;
  margin: 0 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
