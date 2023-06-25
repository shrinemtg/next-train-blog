import Image from "next/image";
import styled from "styled-components";

export default function Mainside() {
  return (
    <SideContainer>
      <FormContainer>
        <Image
          src="/Imgs/removeーbg/search.png"
          alt=""
          width={18}
          height={18}
        />
        <form id="form4" action="自分のサイトURL" method="get">
          <input id="sbox4" name="s" type="text" placeholder="To text" />
        </form>
      </FormContainer>
      <div>
        <HostContainer>
          <Image
            src="/Imgs/removeーbg/hiyoko-bg.png"
            alt=""
            width={150}
            height={150}
          />
          <h2>Mitsugu Sato</h2>
          <p>
            二級建築士
            <br /> ホームアドバイザー
            <br />
            緑のある暮らしをコンセプトにリビングや書斎に置ける観葉植物を紹介していこうと思います。
          </p>
        </HostContainer>
        <Category>
          <h2>カテゴリー</h2>
          <p>
            観葉植物 ()
            <br />
            エアープランツ ()
            <br />
            チランジア ()
            <br />
            ストレプトフィラ ()
            <br />
            イオナンタ ()
            <br />
            フィロデンドロン ()
            <br />
            フィカス ()
            <br />蘭 ()
            <br />
            庭木、花木 ()
            <br />
            ブラキキトン ()
            <br />
            セローム ()
          </p>
        </Category>

        <SideTag>
          <h2>タグ</h2>
          <Image src="/Imgs/removeーbg/tag.png" alt="" width={18} height={18} />
          <p>タグ</p>
          <Image src="/Imgs/removeーbg/tag.png" alt="" width={18} height={18} />
          <p>タグ</p>
          <Image src="/Imgs/removeーbg/tag.png" alt="" width={18} height={18} />
          <p>タグ</p>
          <Image src="/Imgs/removeーbg/tag.png" alt="" width={18} height={18} />
          <p>タグ</p>
          <Image src="/Imgs/removeーbg/tag.png" alt="" width={18} height={18} />
          <p>タグ</p>
          <Image src="/Imgs/removeーbg/tag.png" alt="" width={18} height={18} />
          <p>タグ</p>
        </SideTag>
      </div>
    </SideContainer>
  );
}

const HostContainer = styled.div`
  margin-top: 56px;
  background-color: #c7cfc7;
  max-width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 56px auto 20px;
  > h2 {
    text-align: center;
    border-bottom: 2px solid;
    width: 180px;
    margin-bottom: 20px;
  }
`;

const SideContainer = styled.div`
  width: 208px;
  margin: auto;
  background-color: #84ae84;

  > h2 {
    text-align: center;
    border-bottom: 2px solid;
    width: 180px;
    margin-bottom: 20px;
  }
`;

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  background-color: #82b582;
  #form4 {
    position: relative;
    max-width: 300px;
    margin-bottom: 20px;
  }
  #sbox4 {
    height: 50px;
    padding: 0 10px;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 16px;
    outline: 0;
    background: #eee;
  }
`;

const Category = styled.div`
  margin-top: 56px;
  /* background-color: #c7cfc7; */
  max-width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 20px;
  > h2 {
    text-align: center;
    border-bottom: 2px solid;
    width: 180px;
    margin-bottom: 20px;
  }
`;

const SideTag = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 56px;
  max-width: 180px;
  margin: 0 auto 20px;
  > h2 {
    text-align: center;
    border-bottom: 2px solid;
    width: 180px;
    margin-bottom: 20px;
  }
`;
