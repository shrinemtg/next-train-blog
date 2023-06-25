import styled from "styled-components";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <StyledImage>
          <Image
            src="/Imgs/removeーbg/Group 6.png"
            alt=""
            width={80}
            height={16}
          />
        </StyledImage>
        <small>©Bunchans.com</small>
      </FooterContainer>
      ;
    </>
  );
}

const StyledImage = styled.div`
  margin: 10px;
  /* color: wheat; */
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: darkgreen;
  height: 100px;
  margin: 300px 0 0 0;
`;
