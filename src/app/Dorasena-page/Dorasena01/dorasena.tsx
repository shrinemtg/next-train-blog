"use client";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Dorasena() {
  return (
    <>
      <WarapContainer>
        <ListContainer>
          <StyledImage>
            <Image
              src="/Imgs/botanical/botanical/dorsena_.jpg"
              alt=""
              width={400}
              height={400}
            />
          </StyledImage>
          <StyledImages>
            <Image
              src="/Imgs/botanical/botanical/dorsena2.jpg"
              alt=""
              width={72}
              height={72}
            />{" "}
            <Image
              src="/Imgs/botanical/botanical/dorsena3.jpg"
              alt=""
              width={72}
              height={72}
            />{" "}
            <Image
              src="/Imgs/botanical/botanical/dorsena4.jpg"
              alt=""
              width={72}
              height={72}
            />{" "}
            <Image
              src="/Imgs/botanical/botanical/dorsena5.jpg"
              alt=""
              width={72}
              height={72}
            />{" "}
            <Image
              src="/Imgs/botanical/botanical/dorsena_.jpg"
              alt=""
              width={72}
              height={72}
            />
            <Button>
              <button>
                <Image
                  src="/Imgs/removeーbg/good.png"
                  alt=""
                  width={18}
                  height={18}
                />
              </button>
              <button>
                <Image
                  src="/Imgs/removeーbg/bad.png"
                  alt=""
                  width={18}
                  height={18}
                />
              </button>
            </Button>
            <Tag>
              <Image
                src="/Imgs/removeーbg/tag.png"
                alt=""
                width={18}
                height={18}
              />
              <p>タグ</p>
            </Tag>
            <Name>
              <Image
                src="/Imgs/removeーbg/user.png"
                alt=""
                width={18}
                height={18}
              />
              <p>タグ</p>
            </Name>
          </StyledImages>
        </ListContainer>
        {/*  */}
        {/*  */}
        {/*  */}
        <TextContainer>
          <Taitle>
            <h1>ドラセナ・マッサンゲアナ</h1>
          </Taitle>
        </TextContainer>
      </WarapContainer>
    </>
  );
}

const TextContainer = styled.div`
  display: flex;
`;
const Taitle = styled.div`
  display: flex;
`;

//
//
//
const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  margin: 40px 0;
  gap: 32px;

  @media screen and (max-width: 748px) {
    margin: 0;
  }
`;

const Button = styled.button`
  gap: 10px;
`;
const Tag = styled.div`
  display: flex;
`;
const Name = styled.div`
  display: flex;
`;

const StyledImages = styled.div`
  display: flex;
`;
const StyledImage = styled.div`
  display: flex;
`;
const WarapContainer = styled.div`
  display: flex;
  justify-content: center;

  max-width: 1180px; /* 最大幅を1080pxに設定 */
  margin: 0 auto; /* 左右の余白を自動で設定 */
`;
