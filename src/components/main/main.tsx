"use client";
import styled from "styled-components";
// import React from "react";
import Image from "next/image";
import Link from "next/link";
import Youtube from "./youtube/youtube";
import Mainside from "./main-side/mainsaid";

// import { client } from "../../../libs/client";

export default function Main() {
  const [width, height] = [208, 152];
  return (
    <>
      <Headline>
        <div>
          <p>Season</p>
          <h1>Pick up</h1>
        </div>
      </Headline>
      <WarapContainer>
        <ListContainer>
          <ImageContainer>
            <Link href="/dorasena/">
              <a>
                <Image
                  src="/Imgs/removeーbg/dorsena-bg.png"
                  alt=""
                  width={width}
                  height={height}
                />
              </a>
              <p>2023.06.06</p>
            </Link>
            <p>
              ドラセナ・マッサンゲアナ
              <br />
              別名、幸福の木とも言われている。
            </p>
            <Button>
              <Image
                src="/Imgs/removeーbg/good.png"
                alt=""
                width={18}
                height={18}
              />
              <Image
                src="/Imgs/removeーbg/bad.png"
                alt=""
                width={18}
                height={18}
              />
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
          </ImageContainer>
          <ImageContainer>
            <Image
              src="/Imgs/removeーbg/Pachira-bg.png"
              alt=""
              width={width}
              height={height}
            />
            <p>2023.06.06</p>
            <p>
              パキラ
              <br />
              葉が大きくて丈夫、上に伸びやすい
            </p>
            <Button>
              <Image
                src="/Imgs/removeーbg/good.png"
                alt=""
                width={18}
                height={18}
              />
              <Image
                src="/Imgs/removeーbg/bad.png"
                alt=""
                width={18}
                height={18}
              />
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
          </ImageContainer>
          <ImageContainer>
            <Image
              src="/Imgs/removeーbg/kinebosi-bg.png"
              alt=""
              width={width}
              height={height}
            />
            <p>2023.06.06</p>
            <p>
              キンエボシ
              <br />
              烏帽子のような形から名付けられた。
            </p>
            <Button>
              <Image
                src="/Imgs/removeーbg/good.png"
                alt=""
                width={18}
                height={18}
              />
              <Image
                src="/Imgs/removeーbg/bad.png"
                alt=""
                width={18}
                height={18}
              />
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
          </ImageContainer>
          <ImageContainer>
            <Image
              src="/Imgs/removeーbg/monsutera-bg.png"
              alt=""
              width={width}
              height={height}
            />
            <p>2023.06.06</p>
            <p>
              モンステラ
              <br />
              別名、幸福の木とも言われている。
            </p>
            <Button>
              <Image
                src="/Imgs/removeーbg/good.png"
                alt=""
                width={18}
                height={18}
              />
              <Image
                src="/Imgs/removeーbg/bad.png"
                alt=""
                width={18}
                height={18}
              />
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
          </ImageContainer>
          <ImageContainer>
            <Image
              src="/Imgs/removeーbg/haorucha-bg.png"
              alt=""
              width={width}
              height={height}
            />
            <p>2023.06.06</p>
            <p>
              ハオルチア
              <br />
              別名、幸福の木とも言われている。
            </p>
            <Button>
              <Image
                src="/Imgs/removeーbg/good.png"
                alt=""
                width={18}
                height={18}
              />
              <Image
                src="/Imgs/removeーbg/bad.png"
                alt=""
                width={18}
                height={18}
              />
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
          </ImageContainer>
          <ImageContainer>
            <Image
              src="/Imgs/removeーbg/potos-bg.png"
              alt=""
              width={width}
              height={height}
            />
            <p>2023.06.06</p>
            <p>
              ポトス
              <br />
              和名「オウゴンカズラ」
            </p>
            <Button>
              <Image
                src="/Imgs/removeーbg/good.png"
                alt=""
                width={18}
                height={18}
              />
              <Image
                src="/Imgs/removeーbg/bad.png"
                alt=""
                width={18}
                height={18}
              />
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
          </ImageContainer>
          <ImageContainer>
            <Image
              src="/Imgs/removeーbg/chimoran-bg.png"
              alt=""
              width={width}
              height={height}
            />
            <p>2023.06.06</p>
            <p>
              メキシコチモラン
              <br />
              乾燥に強く水やりしなくても元気に育つ。
            </p>
            <Button>
              <Image
                src="/Imgs/removeーbg/good.png"
                alt=""
                width={18}
                height={18}
              />
              <Image
                src="/Imgs/removeーbg/bad.png"
                alt=""
                width={18}
                height={18}
              />
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
          </ImageContainer>
          <ImageContainer>
            <Image
              src="/Imgs/removeーbg/augusta-bg.png"
              alt=""
              width={width}
              height={height}
            />
            <p>2023.06.06</p>
            <p>
              オーガスタ
              <br />
              バナナの葉のような大きな葉を持ち南国の雰囲気が漂う植物。
            </p>
            <Button>
              <Image
                src="/Imgs/removeーbg/good.png"
                alt=""
                width={18}
                height={18}
              />
              <Image
                src="/Imgs/removeーbg/bad.png"
                alt=""
                width={18}
                height={18}
              />
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
          </ImageContainer>
        </ListContainer>
        {/*  */}
        {/*  */}
        <div>
          <Mainside />
        </div>
      </WarapContainer>
      <div>
        <Youtube />
      </div>
    </>
  );
}

const Headline = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column-reverse;
  max-width: 1180px;
  margin: 60px auto;

  > div h1 {
    width: 208px;
    margin: 0 0 0 80px;
    border-bottom: 1px solid;
  }
  > div p {
    margin: 0 0 0 40px;
  }
`;

const WarapContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1180px;
  margin: 0 auto; /* 左右の余白を自動で設定 */
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  border: none;
  background: none;
  margin: 10px;
`;
const Tag = styled.div`
  display: flex;
  margin: 10px;
  gap: 12px;
`;

const Name = styled.div`
  display: flex;
  margin: 10px;
  gap: 12px;
`;

const ImageContainer = styled.div`
  width: 208px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.8);
  > img {
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  @media screen and (max-width: 748px) {
    margin: 0;
  }
`;
