"use client";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Dorasena() {
  return (
    <>
      <Breadcrumb>
        <Link href="/">Home</Link> / <span>ドラセナ・マッサンゲアナ</span>
      </Breadcrumb>
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
          </StyledImages>
          <Subcontainer>
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
          </Subcontainer>
          <p>2023.06.06</p>
        </ListContainer>
        {/*  */}
        {/*  */}
        {/*  */}
        <TextContainer>
          <Taitle>
            <h1>ドラセナ・マッサンゲアナ</h1>
          </Taitle>
          <Point>
            <RotatedText>
              <h2>POINT</h2>
            </RotatedText>
          </Point>
          <h2>
            初心者にも育てやすく、種類が豊富な「ドラセナ」。特に「マッサンゲアナ」は"幸福の木"という呼び名を持ち、ギフトにも人気です。伸びすぎた場合は5～8月に剪定できます。
          </h2>
          <ul>
            <li>※ご注意※ 北海道・沖縄・一部離島への配達は出来ません。</li>
            <li>
              ※ご注意※冬季期間（12月下旬～3月末）は温度障害の恐れがあるため、地域によってお断りする場合がございます。
            </li>
            <li>サイズ：高さ 100cm / 幅 50～60cm</li>
            <li>鉢サイズ:8号樹脂製鉢（受け皿付き）</li>
            <li>
              置き場所：風通しの良いレース越しの日光が当たる明るい場所を好みます。冬は冷気の当たる場所は避けてください。
            </li>
            <li>
              水やり：土の表面が乾いたら、鉢底から水が染み出るくらいたっぷりと水を与えてください。
            </li>
            <li>
              鉢や受け皿のデザインは予告なく変更する場合がございますので予めご了承をお願い致します。
            </li>
          </ul>
        </TextContainer>
      </WarapContainer>
    </>
  );
}

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 30px auto;
  font-size: 14px;
  > h2 {
    font-size: 18px;
    margin: 16px;
  }
  > ul li {
    margin: auto;
    max-width: 300px;
  }
`;
const Taitle = styled.div`
  display: flex;
  font-size: 16px;
  border-bottom: 3px solid;
  margin: 0 0 60px 0;
`;
const Point = styled.div`
  position: relative;
  transform: translateY(-20px);
  font-size: 14px;
`;
const RotatedText = styled.h2`
  transform: rotate(-30deg);
  transform-origin: top left;
  position: absolute;
  top: 20px;
  left: -46px;
`;

//

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: #999;
  margin: 60px auto 0;
  max-width: 1000px;
  > span {
    font-weight: bold;
  }
  > a {
    color: #999;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

//
//
const Subcontainer = styled.div`
  display: flex;
`;
const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  margin: 40px auto;
  gap: 32px;

  @media screen and (max-width: 748px) {
    margin: 0;
  }
`;
const WarapContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1180px; /* 最大幅を1080pxに設定 */
  margin: 0 auto; /* 左右の余白を自動で設定 */
`;
const StyledImages = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  gap: 10px;
  margin: 10px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  border: none;
  background: none;
  padding: 0;
`;
const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 20px;
`;
const Name = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledImage = styled.div`
  display: flex;
`;
