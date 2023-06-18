import styled from "styled-components";

export default function Header() {
  return (
    <header>
      <Title>
        <h1>My Style Life</h1>
      </Title>
      <NavContainer>
        <nav>
          <ul>
            <Licontainer>
              <a>Style</a>
              <p>スタイル</p>
            </Licontainer>
            <Licontainer>
              <a>Learn</a>
              <p>学ぶ</p>
            </Licontainer>
            <Licontainer>
              <a>Purchasing</a>
              <p>購入</p>
            </Licontainer>
          </ul>
        </nav>
      </NavContainer>
    </header>
  );
}
const Title = styled.div`
  text-align: center;
  margin: 30px;
`;
const Licontainer = styled.li`
  list-style: none;
  text-decoration: none;
  float: left;
  overflow: hidden;
  margin: 10px 30px;
  margin-bottom: solid 1px;
  > a {
    font-size: 24px;
  }
  > p {
    font-size: 14px;
  }
`;

const NavContainer = styled.div`
  text-align: center;
  justify-content: center;
  display: flex;
  /* color: #c0a9da; */
`;
