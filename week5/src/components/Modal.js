import styled from "styled-components";
import kakao from "../assets/image/icon_kakao.png";
import google from "../assets/image/icon_google.png";
import twitter from "../assets/image/icon_twitter.png";
import line from "../assets/image/icon_line.png";
import logo from "../assets/image/icon_logo.png";

const Modal = ({ click }) => {
  return (
    <BackGround>
      <Container>
        <OutButton onClick={() => click(false)}>X</OutButton>
        <LogoImage src={logo} alt="로고 이미지" />
        <LoginInput placeholder="이메일" />
        <LoginInput placeholder="비밀번호" />
        <LoginRedButton>로그인</LoginRedButton>
        <Content color="#ff2f6e">비밀번호를 잃어버리셨나요?</Content>
        <CenterBlock>
          <Content color="#8c8c8c">계정이 없으신가요?</Content>
          <Content color="#ff2f6e">회원가입</Content>
        </CenterBlock>
        <CenterBlock>
          <GrayLine />
          <OrContent>OR</OrContent>
          <GrayLine />
        </CenterBlock>
        <WrapIcon>
          <LogoImg src={kakao} alt="kakao" />
          <LogoImg src={google} alt="google" />
          <LogoImg src={twitter} alt="twitter" />
          <LogoImg src={line} alt="line" />
        </WrapIcon>
        <LoginTip>
          TIP. 왓챠 계정이 있으신가요? 왓챠와 왓챠피디아는 같은 계정을 사용해요.
        </LoginTip>
      </Container>
    </BackGround>
  );
};

const BackGround = styled.div`
  z-index: 200;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const LogoImage = styled.img`
  width: 200px;
`;

const CenterBlock = styled.div`
  display: flex;
  justify-content: center;
`;

const WrapIcon = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px;
`;

const LoginRedButton = styled.button`
  width: 330px;
  height: 40px;
  margin-top: 20px;
  background-color: #ff2f6e;
  border-radius: 5px;
  border: none;
  text-align: center;
  color: #ffffff;
  font-size: 15px;
  font-weight: bolder;
`;

const Content = styled.div`
  color: ${(props) => props.color};
  margin: 15px 10px;
`;

const LoginInput = styled.input`
  width: 330px;
  height: 40px;
  margin: 5px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 5px;
  ::placeholder {
    font-size: 15px;
    padding-left: 10px;
    display: flex;
    align-items: center;
  }
`;

const GrayLine = styled.div`
  width: 130px;
  height: 1px;
  background-color: #00000020;
  margin-top: 10px;
`;

const OrContent = styled.div`
  color: #8c8c8c;
  font-size: 14px;
  margin: 0 20px;
`;

const LoginTip = styled.div`
  color: #8d8e8f;
  background-color: #f7f7f7;
  height: 50px;
  padding-top: 10px;
  border-radius: 5px;
  margin: 10px;
`;

const Container = styled.div`
  margin: auto;
  display: flex;
  width: 450px;
  height: 630px;
  background-color: #ffffff;
  border-radius: 6px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const LogoImg = styled.img`
  margin-left: 10px;
`;

const OutButton = styled.button`
  display: flex;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: #ffffff;
  border: none;
  align-self: start;
  margin-left: 15px;
  cursor: pointer;
  font-size: 20px;
`;

export default Modal;
