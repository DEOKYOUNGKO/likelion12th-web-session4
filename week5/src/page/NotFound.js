import React from "react";
import styled from "styled-components";

const NotFound = () => {
  return (
    <Container>
      <Title>404 Error</Title>
      <Content>죄송합니다. 현재 찾을 수 없는 페이지를 요청하셨습니다. </Content>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.p`
  margin: 0 auto;
  font-size: 40px;
  font-weight: 900;
`;
const Content = styled.p`
  font-size: 20px;
  font-weight: 900;
`;

export default NotFound;
