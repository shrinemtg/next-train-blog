import Image from "next/image";
import styled from "styled-components";

export default function Youtube() {
  return (
    <Media>
      <StyledImage>
        <Image
          src="/Imgs/removeーbg/logos_youtube.png"
          alt=""
          width={190}
          height={42}
        />
      </StyledImage>
      <div>
        <Image
          src="/Imgs/removeーbg/youtube-Thumbnail.png"
          alt=""
          width={1180}
          height={450}
          layout="responsive"
        />
      </div>
    </Media>
  );
}

const StyledImage = styled.div`
  margin: 48px;
`;

const Media = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1180px;
  margin: 48px auto;
  margin-top: 100px;
  border-top: 1px dotted;
  > Image {
    margin: 40px;
  }
`;
