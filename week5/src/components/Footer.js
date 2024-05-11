import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #1c1d1f;
  padding: 20px;
  text-align: flex-start;
  font-size: 14px;
  color: #a5a5a7;
`;

const FooterLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterText = styled.p`
  margin: 10px 0;
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>서비스 이용약관 | 개인정보 처리방침 | 회사 안내</FooterText>
    <FooterText>
      고객센터 |{" "}
      <FooterLink href="mailto:cs@watchapedia.co.kr">
        cs@watchapedia.co.kr
      </FooterLink>
      , <FooterLink href="tel:02-515-9985">02-515-9985</FooterLink>
    </FooterText>
    <FooterText>
      제휴 및 대외 협력 |{" "}
      <FooterLink href="https://watcha.team/contact">
        https://watcha.team/contact
      </FooterLink>
    </FooterText>
    <FooterText>
      주식회사 왓챠 | 대표 박태훈 | 서울특별시 서초구 강남대로 343 신덕빌딩 3층
    </FooterText>
    <FooterText>사업자 등록 번호: 211-88-66013</FooterText>
    <FooterText>© 2024 by WATCHA, Inc. All rights reserved.</FooterText>
  </FooterContainer>
);

export default Footer;
